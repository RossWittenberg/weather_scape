App.Collections.Locations = Backbone.Collection.extend({
  model: App.Models.Location,
  url: '/locations',
  initialize: function() {
    console.log('New location Collection');
  },
  save: function(){
    this.each(function(model){
      if (!model.has('id') || model.hasChanged()) { model.save(); }
    }, this)
  }
});