var $ = require('jquery');
var PostCollection = require('./models/posts').PostCollection;
var NewPostForm = require('./views/posts').NewPostForm;

var blogPosts = new PostCollection();

var newPostForm = new NewPostForm({'collection': blogPosts})
  $('.app').html(newPostForm.render().el);
