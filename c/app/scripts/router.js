var Backbone = require('backbone');
var $ = require('jquery');
var views = require('./views/postsview');
var models = require('./models/posts');

var PostRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    'posts/:id': 'postViews',
  },
  initialize: function(){
    this.postCollection = new models.PostCollection();

    var postHeader = new views.PostHeader();
    $('.container').prepend(postHeader.render().el);

    $('.row').html('<div class="list well col-md-2"/><div class="display col-md-10"/>');

    var postList = new views.PostList({collection: this.postCollection});
      $('.list').append(postList.render().el);

    this.postCollection.fetch()
  },

  index: function(){
    $('.display').html('Please select a blog post to view');
  },

  postViews: function(postId){
    var that = this;
    this.postCollection.fetch().then(function(){
      var post = that.postCollection.get(postId);
      var postDisplay = new views.PostDisplay({model: post});
      console.log(postDisplay.render())
        $('.display').html(postDisplay.render().el);
    });


    //this.postCollection.fetch();
  },
  postViewsRender: function(){

  }

});


var router = new PostRouter();

module.exports = router;
