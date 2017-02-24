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

function fetchChartsSuccess(chartsList) {
	return {
		type: types.BULK_ADD_CALCULATED_RATES,
		calculatedRates: chartsList
	};
}
