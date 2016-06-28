var $ = require('jquery');
var NewPersonForm = require('./views/people').NewPersonForm;
var PersonCollection = require('./models/people').PersonCollection;

var people = new PersonCollection();

var newPersonForm = new NewPersonForm({collection: people});
  $('.app').append(newPersonForm.render().el);
