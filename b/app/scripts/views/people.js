var Backbone = require('backbone');
var personForm = require('../../templates/personform.hbs');
var $ = require('jquery');

var NewPersonForm = Backbone.View.extend({
  tagName: 'form',
  className: 'new-person-form well col-md-3',
  template: personForm,
  events: {
    'submit': 'addNewPerson'
  },

  render: function(){
    this.$el.append(this.template());
    return this;
  },

  addNewPerson: function(event){
    event.preventDefault();
    this.collection.create({
      'firstName': $('#first-name').val(),
      'lastName': $('#last-name').val(),
      'streetAddress': $('#street-address').val(),
      'cityStateZip': $('#city-state-zip').val(),
      'phoneNumber': $('#phone-number').val(),
    });
    this.clearForm();
  },

  clearForm: function(){
    $('#first-name').val(''),
    $('#last-name').val(''),
    $('#street-address').val(''),
    $('#city-state-zip').val(''),
    $('#phone-number').val('')
  }
});



module.exports = {
  'NewPersonForm': NewPersonForm
}
