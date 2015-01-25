App.Views.LocationListView = Backbone.View.extend({
  el: '#location-list',
  initialize: function() {
    console.log('New location View');
    this.listenTo(this.collection, 'reset', this.addAll);
    this.listenTo(this.collection, 'add', this.addOne);
  },
  addAll: function(){
    this.collection.each(this.addOne, this);
  },
  addOne: function(location){
    var locationView = new App.Views.LocationView({ model: location });
    locationView.$el.insertAfter(this.$('span.add'));
  },
  // DOM EVENTS
  events: {
    'click span.add':'showForm'
  },
  showForm: function() {
    App.newlocationForm.$el.toggle();
    App.router.navigate('locations/new');
  }
});