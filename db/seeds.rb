Location.destroy_all
User.destroy_all

Location.create({
	latitude: 40.7127,
	longitude: -74.0059,
	name: "New York City",
	state: "NY",
	country: "US"
})

Location.create({
	latitude: -33.9253,
	longitude: 18.4239,
	name: "Cape Town",
	state: "Western Cape",
	country: "ZA"
})

Location.create({
	latitude: -33.45,
	longitude: -70.66,
	name: "Santiago",
	state: "",
	country: "CL"
})

Location.create({
	latitude: -33.9253,
	longitude: 18.4239,
	name: "Cape Town",
	state: "Western Cape",
	country: "ZA"
})

Location.create({
	latitude: -19.000,
	longitude: -99.133,
	name: "Mexico City",
	state: "DF",
	country: "MX"
})

Location.create({
	latitude: 39.7618,
	longitude: -104.8811,
	name: "Denver",
	state: "Colorad0",
	country: "US"
})

Location.create({
	latitude: 64.1333,
	longitude: 21.9333,
	name: "Reykjavik",
	state: "Reykjavik",
	country: "IC"
})

Location.create({
	latitude: 55.6761,
	longitude: 12.5683,
	name: "Copenhagen",
	state: "Copenhagen",
	country: "DK"
})

Location.create({
	latitude: 38.7139,
	longitude: -9.1394,
	name: "Lisbon",
	state: "Greater Lisbon",
	country: "PT"
})

Location.create({
	latitude: 51.5072,
	longitude: -0.1275,
	name: "London",
	state: "London",
	country: "UK"
})

Location.create({
	latitude: 30.0500,
	longitude: 31.2333,
	name: "Cairo",
	state: "Cairo",
	country: "DK"
})

Location.create({
	latitude: 22.2670,
	longitude: 114.1880,
	name: "Hong Kong",
	state: "Hong Kong",
	country: "CH"
})

Location.create({
	latitude: 35.6895,
	longitude: 139.6917,
	name: "Tokyo",
	state: "Tokyo",
	country: "JP"
})



ross = User.create({
	username: "ross",
	password: "ross",
	password_confirmation: "ross"
})

ross.locations = Location.all