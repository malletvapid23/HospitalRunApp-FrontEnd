var couchSerializer = DS.RESTSerializer.extend({
    /**
    @method extractArray
    @param {DS.Store} store
    @param {subclass of DS.Model} type
    @param {Object} payload
    @param {'findAll'|'findMany'|'findHasMany'|'findQuery'} requestType
    @returns {Array} The primary array that was returned in response
    to the original query.
    */
    extractArray: function(store, primaryType, payload) {
        var serializer = this;
        var newPayload = payload.rows.map(function(row){
            return serializer.normalizeRow(row.doc);
        });
        return newPayload;
    },
    
    /**
    `extractSave` is a hook into the extract method used when a call
    is made to `DS.Model#save`. By default this method is alias
    for [extractSingle](#method_extractSingle).

    @method extractSave
    @param {DS.Store} store
    @param {subclass of DS.Model} type
    @param {Object} payload
    @return {Object} json The deserialized payload
    */
    extractSave:  function(store, primaryType, payload, recordId, requestType) {
        if (payload.ok) {            
            var record =  store.getById('user', payload.id);
            var data = {};
            this.serializeIntoHash(data, primaryType, record, { includeId: true });
            data.user.rev = payload.rev;
            return data.user;
        }
        return null;
    },
    
    /**    
    @method extractSingle
    @param {DS.Store} store
    @param {subclass of DS.Model} type
    @param {Object} payload
    @param {String} id
    @param {'find'|'createRecord'|'updateRecord'|'deleteRecord'} requestType
    @returns {Object} the primary response to the original request          
    */
    extractSingle: function(store, primaryType, payload, recordId, requestType) {
        return this.normalizeRow(payload);
    },
    
    /**
    Maps _id and _rev to id and rev so that Ember doesn't think they are private properties.
    @param {Object} row Row to normalize
    */
    normalizeRow: function(row) {
        row.id = row._id;
        row.rev = row._rev;            
        return row;
    }

    
    
});

export default couchSerializer;
