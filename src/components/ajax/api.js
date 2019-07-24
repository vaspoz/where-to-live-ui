import fetch from 'isomorphic-fetch';
import {countriesURL, citiesURL, chartsURL, sortChartBy, countryCodesAPI} from '../global';

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
