var Backbone = require('backbone');

var Bookmark = Backbone.Model.extend({
  idAttribute: '_id',
});

var BookmarkCollection = Backbone.Collection.extend({
  model: Bookmark,
  url: 'https://tiny-lasagna-server.herokuapp.com/collections/v-bookmarks'
});

module.exports = {
  'Bookmark': Bookmark,
  'BookmarkCollection': BookmarkCollection
}
