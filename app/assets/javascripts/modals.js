var registerForm, menu, searchResultsModal, loginModal, registerModal, userViewModal, logInForm, userView, vellum;

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
	registerForm = $('#register');
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
		var query = $('input#searchInput').val();
		console.log(query)
		$.ajax({ 
		    type: "POST",
		    url: '/search',
		    data: { query: query},
		    success: function (data) {
		      renderSearchResults(data)
		    },
		    error: function (data) {
		    	console.log(data)
		     	$('<p>').text("the username or password you have entered is correct. please try again").appendTo(loginModal)
		    }  
		});
		debugger;
	}

	function renderSearchResults(data){
		console.log(data);
	}

	function generateUserView(data) {
		console.log(data)
		// debugger;
	if ($('#userName').length === 0 ){
		var userView = $('#userView');
		userView.empty();
		var exit = $('<div>').text('x').attr('id', 'exit');

		var userName = $('<div>').attr('id', 'userName')
															.text(data.current_user.username + "'s saved locations:");
		var locationsContainer = $('<div>').addClass('locationsContainer');
															
		for (var i = 0; i < data.locations.length; i++) {
					$('<div>').bind('click', function(){
											console.log(this);
											renderLocation();
										})	
										.css('font-size', '18px')
										.attr('id', i+1)
										.text( data.locations[i].city + ", " +
															 data.locations[i].state + "  " +
															 data.locations[i].country + "  " +
															 data.locations[i].latitude + "  " +
															 data.locations[i].longitude )			
										.appendTo(locationsContainer)
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
		$('#register').empty();
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
	// function showMenu() {
	// 	if (menuShow === false){
	// 		menu.hide();
	// 		$('.menuDiv').css({ 'height': 'auto', 'opacity': '1' });
	// 		menu.slideDown('700', "swing");
	// 		menuShow = true;
	// 	} 	
	// }
	function hideModals(){
		searchResultsModal.hide();
		loginModal.hide();
		registerModal.hide();
		userViewModal.hide();
		menu.show();
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
		console.log(data)
		$('<h1>').text('weather scape').prependTo($('.menuDiv'));
		// debugger;
		if ( data.current_user && data.current_user !== "null") {
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




