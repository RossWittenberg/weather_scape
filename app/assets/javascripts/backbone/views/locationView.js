App.Views.LocationView = Backbone.View.extend({
  className: 'location',
  initialize: function() {
    console.log('location view');
    this.template = HandlebarsTemplates['location'];
    this.listenTo(this.model, 'change', this.render);
    this.listenTo(this.model, 'destroy', this.remove);
    this.render();
  },
  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
    // debugger;
  },
  // DOM EVENTS
  events: {
    'click span.destroy': 'destroyLocation',
    'click span.cancel': 'cancel'
  },
  destroyLocation: function() {
    this.model.destroy();
  },
  cancel: function() {
    App.router.navigate('');
    this.render();
  }
});