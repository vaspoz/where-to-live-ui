const initialState = {
	// Country list to choose from in initial step
	countryList: [],

	// City list loaded after country chosen
	cityList: [],

	// Selecter pair Country-City from the list
	baseData: {
		country: "",
		city: ""
	},

	// Array of countries to compare with
	compareTo: [],

	// Calculated rates for chosen countries
	calculatedRates: [
		{
			country: "",
			cityRates: [
				{
					city: "",
					expenses: 0.00,
					salary: 0.00,
					overall: 0.00
				}
			]
		}
	],

	// Number of current open connections
	ajaxConnections: 0,

	globalSettings: {
		sortOrder: 'salary'
	}
};
