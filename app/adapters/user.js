import Ember from 'ember';
import DS from 'ember-data';
import UserSession from 'hospitalrun/mixins/user-session';

const { get } = Ember;

export default DS.RESTAdapter.extend(UserSession, {
  config: Ember.inject.service(),
  database: Ember.inject.service(),
  session: Ember.inject.service(),
  endpoint: '/db/_users/',
  defaultSerializer: 'couchdb',
  oauthHeaders: Ember.computed.alias('database.oauthHeaders'),

  ajaxError(jqXHR) {
    let error = this._super(jqXHR);
    if (jqXHR && jqXHR.status === 401) {
      let jsonErrors = Ember.$.parseJSON(jqXHR.responseText);
      window.Hospitalrun.__container__.lookup('controller:application').transitionToRoute('login');
      return new DS.InvalidError(jsonErrors);
    } else {
      return error;
    }
  },

  /**
  @method ajaxOptions Overriden here so that we can specify xhr with credentials
  @private
  @param {String} url
  @param {String} type The request type GET, POST, PUT, DELETE etc.
  @param {Object} options
  @return {Object} hash
  */
  ajaxOptions(url, type, options) {
    options = options || {};
    options.xhrFields = { withCredentials: true };
    return this._super(url, type, options);
  },

  /**
   Called by the store when a newly created record is
   saved via the `save` method on a model record instance.

   The `createRecord` method serializes the record and makes an Ajax (HTTP POST) request
   to a URL computed by `buildURL`.

   See `serialize` for information on how to customize the serialized form
   of a record.

   @method createRecord
   @param {DS.Store} store
   @param {subclass of DS.Model} type
   @param {DS.Model} record
   @returns {Promise} promise
  */
  createRecord(store, type, record) {
    return this.updateRecord(store, type, record);
  },

  /**
  Called by the store when a record is deleted.
  @method deleteRecord
  @param {DS.Store} store
  @param {subclass of DS.Model} type
  @param {DS.Snapshot} record
  @returns {Promise} promise
  */
  deleteRecord(store, type, snapshot) {
    return this.updateRecord(store, type, snapshot, true);
  },

  /**
  Called by the store in order to fetch the JSON for a given
  type and ID.

  The `find` method makes an Ajax request to a URL computed by `buildURL`, and returns a
  promise for the resulting payload.

  This method performs an HTTP `GET` request with the id provided as part of the query string.

  @method find
  @param {DS.Store} store
  @param {subclass of DS.Model} type
  @param {String} id
  @returns {Promise} promise
  */
  find(store, type, id) {
    if (this.get('config.standAlone') ===  true) {
      let userKey = 'org.couchdb.user:' + id;
      return this._offlineFind(userKey);
    } else {
      let findUrl = this.endpoint + id;
      return new Ember.RSVP.Promise((resolve, reject) => {
        this.ajax(findUrl, 'GET').then(resolve, (error) => {
          let database = get(this, 'database');
          reject(database.handleErrorResponse(error));
        });
      });
    }
  },

  /**
  Called by find in we're in standAlone mode.

  @method private
  @param {String} id - document id we are retrieving
  @returns {Promise} promise
  */
  _offlineFind(id) {
    let usersDB = get(this, 'database.usersDB');
    return new Ember.RSVP.Promise((resolve, reject) => {
      usersDB.get(id).then(resolve).catch((err) => {
        let database = get(this, 'database');
        reject(database.handleErrorResponse(err));
      });
    });
  },

  headers: function() {
    let oauthHeaders = this.get('oauthHeaders');
    if (Ember.isEmpty(oauthHeaders)) {
      return {};
    } else {
      return oauthHeaders;
    }
  }.property('oauthHeaders'),

  /**
   Called by the store when an existing record is saved
   via the `save` method on a model record instance.

   The `updateRecord` method serializes the record and makes an Ajax (HTTP PUT) request
   to a URL computed by `buildURL`.

   See `serialize` for information on how to customize the serialized form
   of a record.

   @method updateRecord
   @param {DS.Store} store
   @param {subclass of DS.Model} type
   @param {DS.Snapshot} record
   @param {boolean} deleteUser true if we are deleting the user.
   @returns {Promise} promise
  */
  updateRecord(store, type, record, deleteUser) {
    let data = {};
    let serializer = store.serializerFor(record.modelName);
    serializer.serializeIntoHash(data, type, record, { includeId: true });
    data.type = 'user';
    if (deleteUser) {
      data.deleted = true;
      delete data.oauth;
      data.roles = ['deleted'];
    }
    if (Ember.isEmpty(data._rev)) {
      delete data._rev;
    }
    data = this._cleanPasswordAttrs(data);
    if (this.get('config.standAlone') ===  true) {
      return this._offlineUpdateRecord(data);
    } else {
      let putURL = `${this.endpoint}${Ember.get(record, 'id')}`;
      return new Ember.RSVP.Promise((resolve, reject) => {
        this.ajax(putURL, 'PUT', {
          data
        }).then(resolve, (error) => {
          let database = get(this, 'database');
          reject(database.handleErrorResponse(error));
        });
      });
    }
  },

  /**
  Called by updateRecord in we're in standAlone mode.

  @method private
  @param {POJO} data - the data we're going to store in Pouch
  @returns {Promise} promise
  */
  _offlineUpdateRecord(data) {
    let usersDB = get(this, 'database.usersDB');
    return new Ember.RSVP.Promise((resolve, reject) => {
      usersDB.put(data).then(resolve).catch((err) => {
        let database = get(this, 'database');
        reject(database.handleErrorResponse(err));
      });
    });
  },

  /**
  Called by the store in order to fetch a JSON array for all
  of the records for a given type.

  The `findAll` method makes an Ajax (HTTP GET) request to a URL computed by `buildURL`, and returns a
  promise for the resulting payload.

  @private
  @method findAll
  @param {DS.Store} store //currently unused
  @param {subclass of DS.Model} type //currently unused
  @param {String} sinceToken //currently unused
  @returns {Promise} promise
  */
  findAll() {
    let ajaxData = {
      data: {
        include_docs: true,
        startkey: '"org.couchdb.user"'
      }
    };
    if (this.get('config.standAlone') ===  true) {
      return this._offlineFindAll(ajaxData);
    } else {
      let allURL = `${this.endpoint}_all_docs`;
      return new Ember.RSVP.Promise((resolve, reject) => {
        this.ajax(allURL, 'GET', ajaxData).then(resolve, (error) => {
          let database = get(this, 'database');
          reject(database.handleErrorResponse(error));
        });
      });
    }
  },

  /**
  Called by updateRecord in we're in standAlone mode.

  @method private
  @param {POJO} data - the data we're going to search for in Pouch
  @returns {Promise} promise
  */
  _offlineFindAll(data) {
    let usersDB = get(this, 'database.usersDB');
    return usersDB.allDocs(data);
  },

  /**
   Remove null/empty password fields from payload sent to server
   */
  _cleanPasswordAttrs(data) {
    let attrsToCheck = [
      'derived_key',
      'password',
      'password_scheme',
      'password_sha',
      'salt',
      'iterations'
    ];
    attrsToCheck.forEach(function(attr) {
      if (Ember.isEmpty(data[attr])) {
        delete data[attr];
      }
    });
    return data;
  },

  shouldReloadAll() {
    return true;
  }

});
