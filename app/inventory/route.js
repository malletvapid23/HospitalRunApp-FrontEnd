import AbstractModuleRoute from 'hospitalrun/routes/abstract-module-route';
export default AbstractModuleRoute.extend({
    currentItem: null,
    modelName: 'inventory',
    moduleName: 'inventory',
    newButtonAction: 'newDelivery',
    newButtonText: '+ new delivery',
    subActions: [{
        text: 'Requests',
        linkTo: 'inventory.index'
    }, {
        text: 'Items',
        linkTo: 'inventory.listing'
    }, {
        text: 'History',
        linkTo: 'inventory.completed'
    }],
    sectionTitle: 'Inventory',
    
    actions: {
        addBatch: function(newBatch) {
            var currentItem = this.get('currentItem'),
                batches = currentItem.get('batches');
            batches.addObject(newBatch);
            currentItem.updateQuantity();
            currentItem.save();
            this.send('closeModal');
        },
        
        fulfillRequest: function(request, afterAction) {
            if (request.fulfillRequest()) {
                var inventoryItem = request.get('inventoryItem'),
                    promises = [],
                    requestBatches = request.get('batches');
                requestBatches.forEach(function(batch) {
                    promises.push(batch.save());
                });
                promises.push(inventoryItem.save());
                promises.push(request.save());
                Ember.RSVP.all(promises,'All saving done for inventory fulfillment').then(function(){
                    this.send(afterAction, request);
                }.bind(this));
            }
        },

        newDelivery: function() {
            var item = this.get('store').createRecord('inv-request', {});            
            this.transitionTo('inventory.delivery', item);
        },
        
        showAddBatch: function(inventoryItem) {
            var newBatch = this.get('store').createRecord('inv-batch', {});            
            this.set('currentItem', inventoryItem);
            this.send('openModal', 'inventory.batch.edit', newBatch);
        },
        
        showDelivered: function(request) {
            this.transitionTo('inventory.completed', {queryParams: {id: request.get('id')}});
        }        

    },
    
    /**
     * Calculate a new id based on time stamp and randomized number
     * @return a generated id in base 36 so that its a shorter barcode.
     */
    generateId: function() {
        var min = 1,
            max = 999,
            part1 = new Date().getTime(),
            part2 = Math.floor(Math.random() * (max - min + 1)) + min;
        return part1.toString(36) +'_' + part2.toString(36);
    },
    
    /**
     * Define what data a new inventory item should be instantiated with.  
     * The only default is to set the type to asset; at some point this may be driven by subsection of inventory you are in.
     * @return the default properties for a new inventory item.
     */    
    getNewData: function() {
        return  {
            type: 'Asset'
        };
    },

});