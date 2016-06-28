var Backbone = require('backbone');
var $ = require('jquery');
var blogList = require('../../templates/bloglist.hbs');
var blogDisplay = require('../../templates/blogdisplay.hbs');

var PostHeader = Backbone.View.extend({
  tagName: 'header',
  className: 'header',

  render: function(){
    this.$el.html('<h1>Blog Posts</h1>');  
    return this;
  }
})

var PostList = Backbone.View.extend({
  tagName: 'ul',
  className: 'post-list',

  initialize: function(){
    this.listenTo(this.collection, 'add', this.addNewPost);
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
  className: 'new-post',
  template: blogList,

  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
});

var PostDisplay = Backbone.View.extend({
  tagName: 'p',
  className: 'post-display',
  template: blogDisplay,

  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
});

module.exports = {
  'PostHeader': PostHeader,
  'PostList': PostList,
  'PostDisplay': PostDisplay
}
