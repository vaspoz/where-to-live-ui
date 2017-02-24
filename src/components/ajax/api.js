import fetch from 'isomorphic-fetch';

const port = 8080;
const baseURL = 'http://localhost:' + port;
const countriesURL = baseURL + '/countries';
const citiesURL = baseURL + '/cities/by/';
const chartsURL = baseURL + '/compare';

const BEapi = {
	getCountryList: () => {
		return fetch(countriesURL)
			.then(response => response.json())
			.then(countryList => countryList.sort());
	},
	getCityList: (countryName) => {
		return fetch(citiesURL + countryName).then(response => response.json());
	},
	getCharts: (baseCountry, baseCity, countryList) => {
		return fetch(`${chartsURL}/${baseCountry}/${baseCity}/with-all/${countryList.join(',')}`)
			.then(response => response.json());
	}
};

export default BEapi;
