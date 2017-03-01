import fetch from 'isomorphic-fetch';
import {countriesURL,citiesURL,chartsURL, sortChartBy} from '../global';

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
			.then(response => response.json())
			.then(allCountryRates => sortCountryRates(allCountryRates, sortChartBy));
	}
};

const sortCountryRates = (countryRates = [], byWhat) => {
	countryRates.forEach(singleCountryRates =>
		singleCountryRates.cityRates.sort(
			(cityA, cityB) => {
				if (cityA[byWhat] > cityB[byWhat])
					return 1;
				return -1;
			}
		)
	);
	return countryRates;
};

export default BEapi;
