var registerForm, menu, searchResultsModal, searchResults, loginModal, registerModal, userViewModal, logInForm, userView, vellum;

function initModals(){
	console.log('initiate modals');
	modals();
}

function modals() {
	searchResultsModal = ($(document.body)).find('#searchResultsModal');
	loginModal = ($(document.body)).find('#loginModal');
	registerModal = ($(document.body)).find('#registerModal');
	userViewModal = ($(document.body)).find('#userViewModal')
	searchResults = $('#searchResults');
	registerForm = $('#registerForm');
	logInForm = $('#logIn');
	userView = $('#userView');
	vellum = $('<div>').attr('id', 'vellum');
	menu = $('.menuDiv');
	$(document.body).append(vellum);
	$(document.body).on('click', '#exit', hideModals);
  $(document.body).on('click', '#signIn', newCurrentUser);
  $(document.body).on('click', '#register', newRegister);
  $(document.body).on('click', '#searchButton', searchLocation);
  $('.menuDiv').on('click', '#loginLink', generateLogin);
  $('.menuDiv').on('click', '#registerLink', generateRegister);
  $('.menuDiv').on('click', '#userViewLink', fetchUserForUserView);  
  $('.menuDiv').on('click', '.logOut', logOut);  
  $(document.body).on('click', '.location', getWeatherForLocation)
  $('#search-form').on('click', '#search-button', searchLocation);
  $(document.body).on('click', '#addLocationButton', addLocation);
  $(document.body).on('click', '#deleteLocationButton', deleteLocation);
	fetchCurrentUser();

	function fetchUserForUserView(){
		console.log("fetching user view data")
		$.get('/get_current_user').done(generateUserView);
	};	


	function newCurrentUser(){
		$.ajax({ 
		    type: "POST",
		    url: '/sessions',
		    data: { username: $('#username').val(), password: $('#password').val()},
		    success: function (data) {
		      renderMenu(data)
		    },
		    error: function (data) {
		    	console.log(data)
		     	$('<p>').text("the username or password you have entered is correct. please try again").appendTo(loginModal)
		    }  
		});
	}

	function searchLocation(){
		var query = $('input#search-input').val();
		console.log(query)
		$.ajax({ 
		    type: "GET",
		    url: '/location_search',
		    data: { query: query},
		    success: function (data) {
		      renderSearchResults(data)
		    }
		});
	}

	function renderSearchResults(data){
		console.log(data);
		searchResults.empty();
		var exit = $('<div>').text('x').attr('id', 'exit');
		for (var i = 0; i < data.geonames.length; i++) {
			var addButton = $('<button>').attr('id', 'addLocationButton')
			$('<div>').css('font-size', '18px')
										.attr('class', 'location')
										.attr('name', data.geonames[i].name)
										.attr('city', data.geonames[i].name)
										.attr('state', data.geonames[i].adminName1)
										.attr('country', data.geonames[i].countryCode)
										.attr('latitude', parseFloat(data.geonames[i].lat))
										.attr('longitude', parseFloat(data.geonames[i].lng))
										.text( data.geonames[i].name + "  " +
													 data.geonames[i].adminName1 + " " +
													 data.geonames[i].countryCode + " " +	
													 parseFloat(data.geonames[i].lat) + "  " +
													 parseFloat(data.geonames[i].lng) )	
										.appendTo(searchResults);
			addButton.appendTo(searchResults);
		};
			searchResults.prepend(exit)							

		showSearchResults();
		$('input#search-input').val('')
	};

	function addLocation(){
		var latitude = $(this).prev('.location').attr('latitude');
		var longitude = $(this).prev('.location').attr('longitude');
		var name = $(this).prev('.location').attr('name');
		var state = $(this).prev('.location').attr('state');
		var country = $(this).prev('.location').attr('country');
		$.ajax({ 
	    type: "POST",
	    url: '/locations',
	    data: { location: {latitude: latitude,
							longitude: longitude,
							name: name,
							state: state,
							country: country}},
	    success: function(data) {
	      console.log(data);
	      hideModals()
	      getWeatherForLocation(data)
	    }
		});	
		console.log('adding location to current_user')
	}

	function generateUserView(data) {
		console.log(data)
	if ($('#userName').length === 0 ){
		var userView = $('#userView');
		userView.empty();
		var exit = $('<div>').text('x').attr('id', 'exit');

		var userName = $('<div>').attr('id', 'userName')
															.text(data.current_user.username + "'s saved locations:");
		var locationsContainer = $('<div>').addClass('locationsContainer');
															
		for (var i = 0; i < data.locations.length; i++) {
			var deleteButton = $('<button>').attr('id', 'deleteLocationButton').text('delete')
			$('<div>').css('font-size', '18px')
								.attr('id', data.locations[i].id)
								.attr('class', 'location')
								.attr('name', data.locations[i].name)
								.attr('state', data.locations[i].adminName1)
								.attr('country', data.locations[i].countryCode)
								.attr('latitude', data.locations[i].latitude)
								.attr('longitude', data.locations[i].longitude)
								.text( data.locations[i].name + ", " +
													 data.locations[i].state + "  " +
													 data.locations[i].country + "  " +
													 data.locations[i].latitude + "  " +
													 data.locations[i].longitude )	
								.appendTo(locationsContainer)
								deleteButton.appendTo(locationsContainer)
		};
		userView.append(userName)
							 .append(locationsContainer)
					     .prepend(exit);
	};		
	showUserView();	
};

	function generateLogin(){
		$('#logIn').empty();
		var exit = $('<div>').text('x').attr('id', 'exit');
		var nameLabel = $('<label>').text('username:');	
		var userName = $('<input>').attr('id', 'username')
															 .attr('type', 'text');
		var password = $('<input>').attr('id', 'password')
															 .attr('type', 'password')
		var signIn = $('<button>').attr('id', 'signIn')
															.text('sign in');
		var pwLabel = $('<label>').text('password:');		
		
		password.appendTo(pwLabel);
		userName.appendTo(nameLabel);

		logInForm.append(nameLabel)
						.append(pwLabel)
						.append(signIn)
						.prepend(exit);
		showLogIn();				
	};
	function generateRegister(){
		$('#registerForm').empty();
		var exit = $('<div>').text('x').attr('id', 'exit');
		var nameLabel = $("<label>").text('username:');	
		var regName = $('<input>').attr('id', 'regName')
															.attr('type', 'text');
		var pwLabel = $("<label>").text('password:');
		var regPW = $('<input>').attr('id', 'regPW')
														.attr('type', 'password');
		var pwConLabel = $("<label>").text('password confirmation:');													
		var regPWcon = $('<input>').attr('id', 'regPWcon')
															 .attr('type', 'password')
		var register = $('<button>').attr('id', 'register')
															  .text('register');	
		regPW.appendTo(pwLabel);	
		regPWcon.appendTo(pwConLabel);												  
		regName.appendTo(nameLabel)
		registerForm.append(nameLabel)
							  .append(pwLabel)
							  .append(pwConLabel)
								.append(register)
								.prepend(exit);
		showRegister();						
	};

	function deleteLocation(){
		var id = $(this).prev('.location').attr('id');
		var latitude = $(this).prev().attr('latitude')
		$.ajax({ 
		    type: "DELETE",
		    url: '/locations/'+id,
		    data: { location: {latitude: latitude}},
		    success: function (data) {
		    	console.log(data)
		      fetchUserForUserView()
		    }
		});
	}

	function hideModals(){
		searchResultsModal.hide();
		loginModal.hide();
		registerModal.hide();
		userViewModal.hide();
		menu.slideDown('700', "swing");
		$(vellum).css('opacity', '0');
	};
	function showLogIn() {
		hideModals();
		menu.hide();
		loginModal.empty();
		$(vellum).css('opacity', '.7');
		logInForm.show();
		loginModal.append(logInForm);
		loginModal.show();
	};
	function showSearchResults(){
		hideModals();
		menu.hide();
		searchResultsModal.empty();
		searchResults.show();
		$(vellum).css('opacity', '.7');
		searchResultsModal.append(searchResults);
		searchResultsModal.show();
	};

	function showUserView() {
		hideModals();
		menu.hide();
		userViewModal.empty();
		userView.show();
		$(vellum).css('opacity', '.7');
		userViewModal.append(userView);
		userViewModal.show();
	};
	function showRegister() {
		hideModals();
		menu.hide();
		registerModal.empty();
		registerForm.show();
		$(vellum).css('opacity', '.7');
		registerModal.append(registerForm);
		registerModal.show();
	};

	function logOut(){
		$.get( '/logout' ).done(renderMenu);
	}

	function fetchCurrentUser(){
		$.get( '/get_current_user' ).done(renderMenu);
	}

	function newCurrentUser(){
		$.ajax({ 
		    type: "POST",
		    url: '/sessions',
		    data: { username: $('#username').val(), password: $('#password').val()},
		    success: function (data) {
		      renderMenu(data)
		    },
		    error: function (data) {
		    	console.log(data)
		     	$('<p>').text("the username or password you have entered is correct. please try again").appendTo(loginModal)
		    } 
		});
	}

	function newRegister(){
		$.ajax({ 
		    type: "POST",
		    url: '/new_user',
		    data: {"user" :{ username: $('#regName').val(), password: $('#regPW').val(), password_confirmation: $('#regPWcon').val()  },
				success: function (data) {
		      renderMenu(data)
		    },
		    error: function (data) {
		    	console.log(data)
		     	$('<p>').text("the username or password you have entered is correct. please try again").appendTo(registerModal)
		    } 
		}}).done(renderMenu);
	}

	function renderMenu(data){ 
		($('.menuDiv')).empty();
		console.log(data.current_user + "!")
		$('<h1>').text('weather scape').prependTo($('.menuDiv'));
		if ( (data.current_user && data.current_user !== "null")  ) {
		  var loggedInUserName = $('<h2>').text(data.current_user.username).attr('id', 'userViewLink');
		  var logOutText = $('<h2>').addClass("logOut").text('log out')
		  $('.menuDiv').append(loggedInUserName)
		               .append(logOutText);
		} else {
		  var loginLink = $('<h2>').attr('id', 'loginLink').text(' log in ')
		  var registerLink = $('<h2>').attr('id', 'registerLink').text('register')
		  $('.menuDiv').append(loginLink)
		               .append(registerLink);  
			}    
	hideModals();
	}
};




