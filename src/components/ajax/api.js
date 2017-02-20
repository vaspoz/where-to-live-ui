import fetch from 'isomorphic-fetch';

const port = 8080;
const baseURL = 'http://localhost:' + port;
const countriesURL = baseURL + '/countries';
const citiesURL = baseURL + '/cities/by/';

const BEapi = {
	getCountryList: () => {
		return fetch(countriesURL).then(response => response.json()).then(countryList => countryList.sort());
	},
	getCityList: (countryName) => {
		return fetch(citiesURL + countryName).then(response => response.json());
	}
};

export default BEapi;
