var Backbone = require('backbone');
var $ = require('jquery');
var views = require('./views/postviews');
var models = require('./models/posts');

var Router = Backbone.Router.extend({
  routes: {
    '': 'index',
    'posts/:id': 'postViews'
  },

  initialize: function(){
    this.collection = new models.PostCollection();

    var screenSetup = new views.ScreenSetup();
      $('body').append(screenSetup.render().el);

    var postForm = new views.PostForm({collection: this.collection});
      $('.forming').html(postForm.render().el);

    var postList = new views.PostList({collection: this.collection});
      $('.listing').html(postList.render().el);
  },

  index: function(){

    $('.viewing').html('Please select a blog post to view!')

    this.collection.fetch();
  },

  postViews: function(postId){
    var that = this;
    this.collection.fetch().then(function(){
      var post = that.collection.get(postId);
      var postView = new views.PostView({model: post});
      //console.log(postView.render())
        $('.viewing').html(postView.render().el);
    });
  }
})


var router = new Router();

module.exports = router;
