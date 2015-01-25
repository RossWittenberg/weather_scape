Location.destroy_all
User.destroy_all

Location.create({
	latitude: 40.7127,
	longitude: -74.0059,
	name: "New York City",
	city: "New York City",
	state: "NY",
	country: "US"
})

Location.create({
	latitude: -33.9253,
	longitude: 18.4239,
	name: "Cape Town",
	city: "Cape Town",
	state: "Western Cape",
	country: "ZA"
})

ross = User.create({
	username: "ross",
	password: "ross",
	password_confirmation: "ross"
	})

ross.locations = Location.all