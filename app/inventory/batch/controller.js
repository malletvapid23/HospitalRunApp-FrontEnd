import AbstractEditController from 'hospitalrun/controllers/abstract-edit-controller';
import InventoryId from 'hospitalrun/mixins/inventory-id';
import InventoryLocations from 'hospitalrun/mixins/inventory-locations';
import InventorySelection from 'hospitalrun/mixins/inventory-selection';
import Ember from 'ember';

export default AbstractEditController.extend(InventoryId, InventoryLocations, InventorySelection, {
  doingUpdate: false,
  inventoryController: Ember.inject.controller('inventory'),
  inventoryItems: null,
  warehouseList: Ember.computed.alias('inventoryController.warehouseList'),
  aisleLocationList: Ember.computed.alias('inventoryController.aisleLocationList'),
  vendorList: Ember.computed.alias('inventoryController.vendorList'),
  purchaseAttributes: [
    'expirationDate',
    'inventoryItem',
    'lotNumber',
    'purchaseCost',
    'quantity',
    'vendorItemNo'
  ],

  inventoryList: function() {
    var inventoryItems = this.get('inventoryItems');
    if (!Ember.isEmpty(inventoryItems)) {
      var mappedItems = inventoryItems.map(function(item) {
        return item.doc;
      });
      return mappedItems;
    }
  }.property('inventoryItems.[]'),

  lookupListsToUpdate: [{
    name: 'aisleLocationList', // Name of property containing lookup list
    property: 'model.aisleLocation', // Corresponding property on model that potentially contains a new value to add to the list
    id: 'aisle_location_list' // Id of the lookup list to update
  }, {
    name: 'vendorList', // Name of property containing lookup list
    property: 'model.vendor', // Corresponding property on model that potentially contains a new value to add to the list
    id: 'vendor_list' // Id of the lookup list to update
  }, {
    name: 'warehouseList', // Name of property containing lookup list
    property: 'model.location', // Corresponding property on model that potentially contains a new value to add to the list
    id: 'warehouse_list' // Id of the lookup list to update
  }],

  showDistributionUnit: function() {
    return this._haveValidInventoryItem();
  }.property('model.inventoryItemTypeAhead', 'model.inventoryItem'),

  showInvoiceItems: function() {
    var invoiceItems = this.get('model.invoiceItems');
    return !Ember.isEmpty(invoiceItems);
  }.property('model.invoiceItems.[]'),

  totalReceived: function() {
    var invoiceItems = this.get('model.invoiceItems'),
      total = 0;
    if (!Ember.isEmpty('invoiceItems')) {
      total = invoiceItems.reduce(function(previousValue, item) {
        return previousValue + Number(item.get('purchaseCost'));
      }, total);
    }
    var purchaseCost = this.get('model.purchaseCost');
    if (this.get('model.isValid') && !Ember.isEmpty(purchaseCost)) {
      total += Number(purchaseCost);
    }
    return total;
  }.property('model.invoiceItems.[].purchaseCost', 'model.isValid', 'model.purchaseCost'),

  updateButtonText: 'Save',

  updateCapability: 'add_inventory_item',

  _addNewInventoryItem: function() {
    this.generateId().then(function(inventoryId) {
      var inventoryItem = this.store.createRecord('inventory', {
        id: inventoryId,
        name: this.get('model.inventoryItemTypeAhead'),
        quantity: 0, // Needed for validation purposes
        skipSavePurchase: true
      });
      this.send('openModal', 'inventory.quick-add', inventoryItem);
    }.bind(this));
  },

  _addInventoryItem: function() {
    var model = this.get('model'),
      inventoryItemTypeAhead = this.get('model.inventoryItemTypeAhead'),
      purchaseCost = this.get('model.purchaseCost'),
      quantity = this.get('model.quantity');
    return model.validate().then(function() {
      if (this.get('model.isValid') && !Ember.isEmpty(inventoryItemTypeAhead) && !Ember.isEmpty(quantity) && !Ember.isEmpty(purchaseCost)) {
        if (this._haveValidInventoryItem()) {
          this._addInvoiceItem();
        } else {
          this._addNewInventoryItem();
          return true;
        }
      } else {
        throw Error('invalid');
      }
    }.bind(this)).catch(function() {
      this.displayAlert('Warning!!!!', 'Please fill in required fields (marked with *) and correct the errors before adding.');
    }.bind(this));
  },

  _addInvoiceItem: function() {
    var model = this.get('model'),
      invoiceItems = model.get('invoiceItems'),
      itemProperties = model.getProperties(this.get('purchaseAttributes')),
      invoiceItem = Ember.Object.create(itemProperties);
    invoiceItems.addObject(invoiceItem);
    model.set('expirationDate');
    model.set('inventoryItem');
    model.set('inventoryItemTypeAhead');
    model.set('lotNumber');
    model.set('purchaseCost');
    model.set('quantity');
    model.set('selectedInventoryItem');
    model.set('vendorItemNo');
  },

  _findInventoryItem: function(purchase) {
    var invoiceItems = this.get('model.invoiceItems'),
      inventoryId = purchase.get('inventoryItem');
    if (!Ember.isEmpty(inventoryId)) {
      var invoiceItem = invoiceItems.find(function(item) {
        return (item.get('inventoryItem.id') === inventoryId);
      }, this);
      if (!Ember.isEmpty(invoiceItem)) {
        return invoiceItem.get('inventoryItem');
      }
    }
  },

  _haveValidInventoryItem: function() {
    var inventoryItemTypeAhead = this.get('model.inventoryItemTypeAhead'),
      inventoryItem = this.get('model.inventoryItem');
    if (Ember.isEmpty(inventoryItemTypeAhead) || Ember.isEmpty(inventoryItem)) {
      return false;
    } else {
      var inventoryItemName = inventoryItem.get('name'),
        typeAheadName = inventoryItemTypeAhead.substr(0, inventoryItemName.length);
      if (typeAheadName !== inventoryItemName) {
        return false;
      } else {
        return true;
      }
    }
  },

  _savePurchases: function() {
    var model = this.get('model'),
      purchaseDefaults = model.getProperties([
        'dateReceived',
        'vendor',
        'invoiceNo',
        'location',
        'aisleLocation',
        'giftInKind']),
      invoiceItems = model.get('invoiceItems'),
      inventoryPurchase,
      savePromises = [];
    invoiceItems.forEach(function(invoiceItem) {
      var inventoryItem = invoiceItem.get('inventoryItem'),
        quantity = invoiceItem.get('quantity');
      inventoryPurchase = this.store.createRecord('inv-purchase', purchaseDefaults);
      inventoryPurchase.setProperties(invoiceItem.getProperties(this.get('purchaseAttributes')));
      inventoryPurchase.setProperties({
        distributionUnit: inventoryItem.get('distributionUnit'),
        currentQuantity: quantity,
        originalQuantity: quantity,
        inventoryItem: inventoryItem.get('id')
      });
      savePromises.push(inventoryPurchase.save());
    }.bind(this));
    Ember.RSVP.all(savePromises).then(function(results) {
      var inventorySaves = [],
        purchasesAdded = [];
      results.forEach(function(newPurchase) {
        var inventoryItem = this._findInventoryItem(newPurchase),
          purchases = inventoryItem.get('purchases');
        purchases.addObject(newPurchase);
        purchasesAdded.push(this.newPurchaseAdded(inventoryItem, newPurchase));
      }.bind(this));

      Ember.RSVP.all(inventorySaves).then(function() {
        results.forEach(function(newPurchase) {
          var inventoryItem = this._findInventoryItem(newPurchase);
          inventoryItem.updateQuantity();
          inventorySaves.push(inventoryItem.save());
        }.bind(this));
        Ember.RSVP.all(inventorySaves).then(function() {
          this.updateLookupLists();
          this.displayAlert('Inventory Purchases Saved', 'The inventory purchases have been successfully saved', 'allItems');
        }.bind(this));
      }.bind(this));
    }.bind(this));
  },

  actions: {
    addInventoryItem: function() {
      this._addInventoryItem();
    },

    addedNewInventoryItem: function(inventoryItem) {
      this.set('model.inventoryItem', inventoryItem);
      this._addInvoiceItem();
      this.send('closeModal');
      if (this.get('doingUpdate')) {
        this._savePurchases();
      }
    },

    removeItem: function(removeInfo) {
      var invoiceItems = this.get('model.invoiceItems'),
        item = removeInfo.itemToRemove;
      invoiceItems.removeObject(item);
      this.send('closeModal');
    },

    showRemoveItem: function(item) {
      var message = 'Are you sure you want to remove this item from this invoice?',
        model = Ember.Object.create({
          itemToRemove: item
        }),
        title = 'Remove Item';
      this.displayConfirm(title, message, 'removeItem', model);
    },

    /**
     * Update the model
     */
    update: function() {
      this.set('doingUpdate', true);
      this._addInventoryItem().then(function(addingNewInventory) {
        if (!addingNewInventory) {
          this._savePurchases();
        }
      }.bind(this));
    }
  }
});
