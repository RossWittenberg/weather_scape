App.Models.Location = Backbone.Model.extend({
  urlRoot: '/locations',
  initialize: function() {
    console.log('New Location Model');
  }
});