var $ = require('jquery');
var Backbone = require('backbone');
var newPostTemplate = require('../../templates/blogpostform.hbs')

var NewPostForm = Backbone.View.extend({
  tagName: 'form',
  className: 'new-post-form well col-md-3',
  template: newPostTemplate,
  events: {
    'submit': 'addBlogPost',
  },
  render: function(){
    this.$el.append(this.template());
    return this;
  },

  addBlogPost: function(event){
    event.preventDefault();
    this.collection.create({
      'title': $('#title').val(),
      'body': $('#body').val()
    });
    this.clearForm();
  },

  clearForm: function(){
    $('#title').val('');
    $('#body').val('');
  }
});

module.exports = {
  'NewPostForm': NewPostForm
}
