var Backbone = require('backbone');
require('./router');
var $ = require('jquery');

$(function(){
  Backbone.history.start();
})
