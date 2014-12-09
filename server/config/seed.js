/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Component = require('../api/component/component.model');
var User = require('../api/user/user.model');

Component.find({}).remove(function() {
  Component.create({
    name : 'QML Component 1',
    info : 'Aliquam nec blandit massa. Ut varius commodo massa eu accumsan. Ut erat nunc, dictum a erat in, lacinia dictum dolor. Donec faucibus diam quis tellus porttitor interdum'
  }, {
    name : 'QML Component 2',
    info : 'Morbi id mi in metus gravida scelerisque vel non nisl. Morbi sit amet rutrum dolor. Duis cursus nec massa in porta'
  }, {
    name : 'QML Component 3',
    info : ' Suspendisse id orci aliquam, interdum velit et, semper ex. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'
  },  {
    name : 'QML Component 4',
    info : 'Pellentesque sit amet venenatis leo. Nullam eleifend non risus sed consequat. '
  },  {
    name : 'QML Component 5',
    info : 'Ut erat nunc, dictum a erat in, lacinia dictum dolor. Donec faucibus diam quis tellus porttitor interdum.'
  },{
    name : 'QML Component 6',
    info : 'Morbi id mi in metus gravida scelerisque vel non nisl. Morbi sit amet rutrum dolor. Duis cursus nec massa in porta. '
  });
});

User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test'
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'admin'
  }, function() {
      console.log('finished populating users');
    }
  );
});