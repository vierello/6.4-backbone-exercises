var Backbone = require('backbone');
var $ = require('jquery');


var ScreenSetup = Backbone.View.extend({
  tagName:'div',
  className: 'container',

  initialize: function(){
    this.$el.append('<div class="row"><header><h1>Bookmarks</h1></header><div class="forming well col-md-4"/><div class="listing col-md-8"/></div>');
  },

  render: function(){
    return this;
  }
});
