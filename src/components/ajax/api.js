import fetch from 'isomorphic-fetch';
import {countriesURL, citiesURL, chartsURL, sortChartBy, countryCodesAPI, signupURL, loginURL} from '../global';

const BEapi = {
	getCountryList: () => {
		return fetch(countriesURL)
			.then(response => response.json())
			.then(countryList => countryList.sort());
	},
	getCityList: (countryName) => {
		return fetch(citiesURL + countryName).then(response => response.json());
	},
	getChart: (baseCountry, baseCity, country) => {
		return fetch(`${chartsURL}/${baseCountry}/${baseCity}/with/${country}`)
			.then(response => response.json())
			.then(countryRates => sortCountryRates(countryRates));
	},
	getCharts: (baseCountry, baseCity, countryList) => {
		return fetch(`${chartsURL}/${baseCountry}/${baseCity}/with-all/${countryList.join(',')}`)
			.then(response => response.json())
			.then(allCountryRates => sortCountryRates(allCountryRates));
	},
	getCountryCode: (country) => {
		return fetch(`${countryCodesAPI}/${country}`)
			.then(response => response.json())
			.then(countryInfo => countryInfo[0].alpha2Code);
	},
	signUp: (username, password, email, countryOrigin) => {
		return fetch(`${signupURL}`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				username: "vaspoz",
				password: "123321",
				email: "vaspoz@vas.poz",
				countryOrigin: "Timberland"
			})
		})
			.then(response => response.json())
	},
	login: (username, password) => {
		return fetch(`${loginURL}`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				username: 'vaspoz',
				password: '123321'
			})
		})
			.then(response => response.json())
	}
};

const sortCountryRates = (countryRates = []) => {
	if (!Array.isArray(countryRates))
		[countryRates].forEach(sortByCityName);
	else
		countryRates.forEach(sortByCityName);
	return countryRates;
};

const sortByCityName = (singleCountryRates) => {
	singleCountryRates.cityRates.sort(
		(cityA, cityB) => {
			if (cityA[sortChartBy] > cityB[sortChartBy])
				return 1;
			return -1;
		}
	);
};

export default BEapi;
