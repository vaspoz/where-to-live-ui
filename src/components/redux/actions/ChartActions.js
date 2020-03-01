import api from '../../ajax/api';
import beginAjaxCall from '../actions/AjaxStatusActions';
import * as types from './ActionTypes';

export function fetchChartsForCountries(baseCountry, baseCity, countryList) {
	return (dispatch) => {
		dispatch(beginAjaxCall());
		return api.getCharts(baseCountry, baseCity, countryList)
			.then(chartsList => dispatch(fetchChartsSuccess(chartsList)))
			.catch(error => {
				throw(error);
			});
	};
}

export function fetchChartForCountry(baseCountry, baseCity, country) {
	return (dispatch) => {
		dispatch(beginAjaxCall());
		return api.getChart(baseCountry, baseCity, country)
			.then(chartSingleCountry => dispatch(fetchSingleChartSuccess(chartSingleCountry)))
			.catch(error => {
				throw(error);
			}) ;
	};
}

function fetchChartsSuccess(chartsList) {
	return {
		type: types.BULK_ADD_CALCULATED_RATES_AJAXEND,
		calculatedRates: chartsList
	};
}

function fetchSingleChartSuccess(chart) {
	console.log(chart);
	return {
		type: types.ADD_CALCULATED_RATES_AJAXEND,
		calculatedRates: chart
	};
}
