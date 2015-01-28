var registerForm, exit, menu, loginForm, loginRegisterLink, searchResultsModal, searchResults, loginModal, registerModal, userViewModal ;

function initModals(){
	console.log('initiate modals');
	modals();
}

function modals() {
	searchResultsModal = ($(document.body)).find('#searchResultsModal');
	registerLoginModal = ($(document.body)).find('#registerLoginModal');
	userViewModal = ($(document.body)).find('#userViewModal');
	searchResults = $('#searchResults');
	userView = $('#userView');
	menu = $('.menuDiv');
  $('.menuDiv').on('click', '#userViewLink', fetchUserForUserView);  
  $('.menuDiv').on('click', '.logOut', logOut);  
  $(document.body).on('click', '#loginRegisterLink', generateRegisterLogin);
	$(document.body).on('click', '#exit', hideModals);
  $(document.body).on('click', '#signIn', newCurrentUser);
  $(document.body).on('click', '#register', newRegister);
  $(document.body).on('click', '.location', getInfoForLocation);
  $(document.body).on('click', '#search-button', searchLocation);
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
		searchResultsModal.empty();
		searchResults.empty();
		exit = $('<div>').text('x close').attr('id', 'exit');
		exit.appendTo(searchResultsModal);
		var searchResultsHeader = $('<div>').html('<h2>search results:</h2>')
		searchResultsModal.append(searchResultsHeader)
		for (var i = 0; i < data.search_results.geonames.length; i++) {
			if (data.current_user !== 'null') {
				var addButton = $('<div>').attr('id', 'addLocationButton')
																  .text('add')
			}									
			$('<div>').css('font-size', '18px')
								.attr('class', 'location')
								.attr('name', data.search_results.geonames[i].name)
								.attr('city', data.search_results.geonames[i].name)
								.attr('state', data.search_results.geonames[i].adminName1)
								.attr('country', data.search_results.geonames[i].countryCode)
								.attr('latitude', parseFloat(data.search_results.geonames[i].lat))
								.attr('longitude', parseFloat(data.search_results.geonames[i].lng))
								.html( data.search_results.geonames[i].name + ",  " +
											 data.search_results.geonames[i].adminName1 + " " +
											 data.search_results.geonames[i].countryCode + "<br>")			 	
								.appendTo(searchResults);
		};					
			if (addButton){		
				addButton.appendTo(searchResults);
			} else {
				loginRegisterLink = ($('<div>'))
													.attr('id', 'loginRegisterLink')
													.text('log in to to save locations');
				searchResultsModal.append(loginRegisterLink)
			}
		searchResultsModal.append(searchResults);
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
	      getInfoForLocation(data)
	    }
		});	
		console.log('adding location to current_user')
		fetchUserForUserView();
	}

	function generateUserView(data) {
		console.log(data)
		userViewModal.empty()
		exit = $('<div>').text('x close').attr('id', 'exit');
		exit.appendTo(userViewModal)
		var userViewDiv = $('<div>').attr('id', 'userView');
		var userName = $('<div>').attr('id', 'userName')
															.text("saved locations:");
		userName.prependTo(userViewDiv)			
		userViewDiv.appendTo(userViewModal)
		var locationsContainer = $('<div>').addClass('locationsContainer');
		locationsContainer.appendTo(userViewDiv)

		for (var i = 0; i < data.locations.length; i++) {
			var deleteButton = $('<div>').attr('id', 'deleteLocationButton').html('x remove<br>')
			$('<div>').css('font-size', '18px')
								.attr('id', data.locations[i].id)
								.attr('class', 'location')
								.attr('latitude', data.locations[i].latitude)
								.attr('longitude', data.locations[i].longitude)
								.attr('name', data.locations[i].name)
								.attr('state', data.locations[i].adminName1)
								.attr('country', data.locations[i].countryCode)
								.text( data.locations[i].name + ", " +
													 data.locations[i].state + "  " +
													 data.locations[i].country )
								.append(deleteButton)					 	
								.appendTo(locationsContainer);
		}		
		locationsContainer.appendTo(userViewDiv);
		userViewDiv.appendTo(userViewModal)
		showUserView();	
	};


	function generateRegisterLogin(){
		console.log('generating register/login')
		registerLoginModal.empty()
		registerinput = $('<div>').attr('id', 'registerForm');
		loginForm = $('<div>').attr('id', 'loginForm');
		var exit = $('<div>').text('x close').attr('id', 'exit');
		var or = ($('<div>')).attr('id', 'or').html('<h2>or</h2>')
		var loginFormUsernameInput = $("<input type='text' placeholder='username' autofocus='false' />")
			 	.attr('id', 'username')
		var loginFormPasswordInput = $("<input type='password' placeholder='password' autofocus='false' />")
			 	.attr('id', 'password')
		var loginFormButton = $("<button type='submit' autofocus='true'>login</button>")
			 	.attr('id', 'signIn')		 	

		loginForm.append(loginFormUsernameInput)
						 .append(loginFormPasswordInput)
						 .append(loginFormButton)

		var registerFormUsernameInput = $("<input type='text' placeholder='username' autofocus='false' />")
			 	.attr('id', 'regName')
		var registerFormPasswordInput = $("<input type='password' placeholder='password' autofocus='false' />")
			 	.attr('id', 'regPW')
		var registerFormPasswordConfirmationInput = $("<input type='password' placeholder='confirm password' autofocus='false' />")
			 	.attr('id', 'regPWcon')	 	
		var registerFormButton = $("<button type='submit' autofocus='falser'>register</button>")
			 	.attr('id', 'register')	 	

		registerForm.append(registerFormUsernameInput)
							  .append(registerFormPasswordConfirmationInput)	
							  .append(registerFormPasswordInput)
							  .append(registerFormButton)					 	 	


		registerLoginModal.append(loginForm)
											.append(or)
											.append(registerForm)
											.prepend(exit)				
		showRegisterLogin();				
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
		    }
		});
    fetchUserForUserView()
	}

	function hideModals(){
		$(searchResultsModal).hide('slow');
		$(registerLoginModal).hide('slow');
		$(registerModal).hide('slow');
		$(userViewModal).hide('slow');
		$('#search-form').slideDown('900', "swing")
		menu.slideDown('700', "swing");
	};
	function showRegisterLogin() {
		hideModals();
		menu.hide();
		$('#search-form').hide('slow');
		registerForm.show();
		registerLoginModal.show( 'slow' );
	};

	function showSearchResults(){
		hideModals();
		menu.hide();
		$('#search-form').hide('slow');
		searchResults.show();
		searchResultsModal.show( 'slow' );
	};

	function showUserView() {
		hideModals();
		menu.hide();
		$('#search-form').hide('slow');
		userViewModal.show('slow');
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
		var savedLocationsDiv = $('<div>').attr('id', 'savedLocations');
		savedLocationsDiv.empty();
		console.log(data.current_user + "!")


		// 									.append($('<button>'))
		// 									.attr('id', 'search-button')
		// 									.text('search');
		// searchForm.appendTo($('.menuDiv'));									
											
		$('<h1>').text('weather scape').prependTo($('.menuDiv'));
		if ( (data.current_user && data.current_user !== "null")  ) {
		  var welcomMessage = $('<h2>').text('hi, ' + data.current_user.username);
		  var savedLocations = $('<h3>').text('saved locations').attr('id', 'userViewLink')
		  var logOutText = $('<h2>').addClass("logOut").text('log out')
		  $('.menuDiv').append(welcomMessage)
		               .append(logOutText);
			var searchForm = $('<div>').attr('id', 'search-form')
			 $("<input id='search-form' type='text' placeholder='location' autofocus='falser' />")
			 	.attr('id', 'search-input')
		  	.appendTo(searchForm)
		  	$("<button type='submit' autofocus='falser'>search</button>")
		  	.attr('id', 'search-button') 
		  	.appendTo(searchForm)
		  	searchForm.appendTo($('.menuDiv')) 
		  savedLocationsDiv.append(savedLocations).appendTo($('.menuDiv')) 
			} else {
			  loginRegisterLink = $('<h2>').attr('id', 'loginRegisterLink').text(' log in / register ')
			  $('.menuDiv').append(loginRegisterLink);  
		  	var searchForm = $('<div>').attr('id', 'search-form')
				$("<input id='search-form' type='text' placeholder='location' autofocus='falser' />")
			 	.attr('id', 'search-input')
		  	.appendTo(searchForm)
		  	$("<button type='submit' autofocus='true'>search</button>") 
		  	.attr('id', 'search-button')            
		  	.appendTo(searchForm)
		  	searchForm.appendTo($('.menuDiv'))
			} 
	$("#search-form").keypress(function(e){
  	var key = e.which;
 		if(key == 13){
    	$('#search-button').click();
    return false;  
  	}
	});   
	hideModals();
	}
};




