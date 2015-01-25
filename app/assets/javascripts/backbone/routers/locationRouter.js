App.Routers.Router = Backbone.Router.extend({
	initialize: function() {
		App.collection = new App.Collections.Locations();
		App.locationList = new App.Views.LocationListView({ collection: App.collection });
	},
	routes: {
		'': 'index',
		'locations/new': 'newLocation',
		'locations/:id/edit': 'editLocation'
	},
	index: function() {
		console.log('Index triggered')
		App.collection.fetch({reset: true});
	},
	newLocation: function() {
		console.log('NEW TRIGGERED');
		App.collection.fetch({reset: true});
	},
	editLocation: function(id) {
		App.collection.fetch({
			reset: true,
			success: function(){
				$('#'+ id).find('span.edit').click();
			}
		});
		App.searchForm.$el.toggle();
	}

});