import fetch from 'isomorphic-fetch';
import {countriesURL, citiesURL, chartsURL, sortChartBy, countryCodesAPI, signupURL, loginURL} from '../global';

// Use a fetch wrapper to inject headers in all requests
let fetchWrap = function(url, options) {
	if (!options) options = {};
	let jwttoken = localStorage.getItem('jwttoken');

	// attach Authorization header if jwt token exists:
	if (jwttoken) {
		options.headers = Object.assign({}, options.headers, {
			'Authorization': `Bearer ${jwttoken}`
		});
	}

	return fetch.apply(this, [url, options]);
};

const BEapi = {
	getCountryList: () => {
		return fetchWrap(countriesURL)
			.then(response => response.json())
			.then(countryList => countryList.sort());
	},
	getCityList: (countryName) => {
		return fetchWrap(citiesURL + countryName).then(response => response.json());
	},
	getChart: (baseCountry, baseCity, country) => {
		return fetchWrap(`${chartsURL}/${baseCountry}/${baseCity}/with/${country}`)
			.then(response => response.json())
			.then(countryRates => sortCountryRates(countryRates));
	},
	getCharts: (baseCountry, baseCity, countryList) => {
		return fetchWrap(`${chartsURL}/${baseCountry}/${baseCity}/with-all/${countryList.join(',')}`)
			.then(response => response.json())
			.then(allCountryRates => sortCountryRates(allCountryRates));
	},
	getCountryCode: (country) => {
		return fetch(`${countryCodesAPI}/${country}`)
			.then(response => response.json())
			.then(countryInfo => countryInfo[0].alpha2Code);
	},
	signUp: (firstName, lastName, username, password, email, countryOrigin) => {
		return fetch(`${signupURL}`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				firstName,
				lastName,
				username,
				password,
				email,
				countryOrigin
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
				username,
				password
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
