App.Views.SearchFormView = Backbone.View.extend({
  el: '#search-form',

  events: {
    'click #search-button': 'searchByClick',
    'keypress #search-input': 'searchByEnter'
  },

  currentQuery: '',

  searchByEnter: function(e) { // This function exists to weed out the event object
    console.log(e.which);
    if (e.which === 13) {
      this.search();
    }
  },

  searchByClick: function() { // This function exists to weed out the event object
    this.search();
  },

  search: function(freezeRoute) {
    var query = this.$('#search-input').val();
    if (query === '') {
      return;
    }
    App.Collections.movies.fetch({
      data: {query: query},
      reset: true
    });
    this.currentQuery = query;
    console.log(query);
    if (!freezeRoute) {
      App.Routers.moviesRouter.navigate('search/' + query);
    }
  }
});