'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ComponentSchema = new Schema({
  name: String,
  info: String,
  imageRoute: String,
  active: Boolean
});

module.exports = mongoose.model('Component', ComponentSchema);