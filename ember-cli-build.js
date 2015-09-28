/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');
var mergeTrees = require('broccoli-merge-trees');
var writeManifest = require('broccoli-manifest');
var fileRemover = require('broccoli-file-remover');

module.exports = function(defaults) {
    var app = new EmberApp(defaults, {
        // Add options here
    });
    // Use `app.import` to add additional libraries to the generated
    // output files.
    //
    // If you need to use different assets in different
    // environments, specify an object as the first parameter. That
    // object's keys should be the environment name and the values
    // should be the asset to use in that environment.
    //
    // If the library that you are including contains AMD or ES6
    // modules that you would like to import into your application
    // please specify an object with the list of modules as keys
    // along with the exports of each module as its value.
    app.import('vendor/pouchdb-list/pouchdb-list.js');
    app.import('bower_components/ember-autofocus/dist/ember-autofocus.min.js');
    app.import('vendor/couch-oauth/sha1.js');
    app.import('vendor/couch-oauth/oauth.js');
    app.import('bower_components/node-uuid/uuid.js');
    app.import('bower_components/bootstrap/dist/js/bootstrap.js');
    app.import('bower_components/JsBarcode/CODE128.js');
    app.import('bower_components/JsBarcode/JsBarcode.js');
    app.import('vendor/dymo/DYMO.Label.Framework.1.2.6.js');
    app.import('bower_components/moment/moment.js');
    app.import('bower_components/typeahead.js/dist/typeahead.bundle.js');
    app.import('bower_components/pikaday/pikaday.js');
    app.import('bower_components/filer.js/src/filer.js');
    app.import('bower_components/idb.filesystem/src/idb.filesystem.js');
    app.import('bower_components/pikaday/css/pikaday.css');
    app.import('vendor/octicons/octicons/octicons.css');
    var completeTree = app.toTree();
    var manifestTree = fileRemover(completeTree, {
        paths: ['index.html', 'tests/', 'testem.js', 'robots.txt']
    });
    return mergeTrees([completeTree, writeManifest(manifestTree)]);
};