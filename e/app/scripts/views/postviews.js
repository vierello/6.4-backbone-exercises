var Backbone = require('backbone');
var $ = require('jquery');
var PostCollection = require('../models/posts').PostCollection;
var listTemplate = require('../../templates/listtemplate.hbs');
var viewTemplate = require('../../templates/viewtemplate.hbs');
var formTemplate = require('../../templates/formtemplate.hbs');
var editTemplate = require('../../templates/edittemplate.hbs');

var ScreenSetup = Backbone.View.extend({
  tagName:'div',
  className: 'container',

  initialize: function(){
    this.$el.append('<div class="row"><header><h1>V&#8217s Blog</h1></header><div class="listing well col-md-2"/><div class="viewing col-md-7"/><div class="forming well col-md-3"/></div>');
  },

  render: function(){
    return this;
  }
});

var PostList = Backbone.View.extend({
  tagName: 'ul',
  className: 'post-list',

  initialize: function(){
   this.listenTo(this.collection, 'add', this.addNewPost)
  },

  render: function(){
    return this;
  },

  addNewPost: function(postInfo){
    var newPost = new Post({'model': postInfo});
    this.$el.append(newPost.render().el);
  }
});

var Post = Backbone.View.extend({
  tagName: 'li',
  className: 'add-post',
  template: listTemplate,

  initialize: function(){
    this.listenTo(this.model, 'destroy', this.removePost);
  },

  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  },

  removePost: function(){
    this.$el.remove();
  }
});

var PostView = Backbone.View.extend({
  tagName: 'div',
  className: 'post-view',
  template: viewTemplate,
  template2: editTemplate,
  events: {
    'click .delete-button': 'deletePost',
    'click .edit-button': 'editPost',
    'click .save-button': 'savePost',
  },

  render: function(){
    this.$el.append(this.template(this.model.toJSON()));
    return this;
  },

  deletePost: function(){
    this.model.destroy();
  },

  editPost: function(event){
    event.preventDefault();
    this.$el.html(this.template2())
    $('.edit-form-title').val(this.model.get('title'))
    $('.edit-form-body').val(this.model.get('body'))
  },

  savePost: function(event){
    event.preventDefault();
    this.model.set({
      'title': $('.edit-form-title').val(),
      'body': $('.edit-form-body').val()
    });
    this.model.save();
  }
});

var PostForm = Backbone.View.extend({
  tagName: 'form',
  className: 'post-form',
  template: formTemplate,
  events: {
    'submit': 'createNewPost'
  },

  render: function(){
    this.$el.append(this.template());
    return this;
  },

  createNewPost: function(event){
    event.preventDefault();
    this.collection.create({
      'title': $('#title').val(),
      'body': $('#body').val(),
    });
    this.clearForm();
  },

  clearForm: function(){
    $('#title').val(''),
    $('#body').val('')
  }
});


module.exports = {
  'ScreenSetup': ScreenSetup,
  'PostList': PostList,
  'PostView': PostView,
  'PostForm': PostForm
}
