import * as types from './ActionTypes';
import api from '../../ajax/api';
import beginAjaxCall from '../actions/AjaxStatusActions';

export function fetchCountryListFromBE() {
	return (dispatch) => {
		dispatch(beginAjaxCall());
		return api.getCountryList()
			.then((countryList) => {
				dispatch(fetchCountrySuccess(countryList));
			})
			.catch((error) => {
				throw(error);
			});
	};
}

export function fetchCountrySuccess(countryList) {
	return {
		type: types.FETCH_COUNTRY_LIST_SUCCESS,
		countryList
	};
}
export function selectBaseCountry(countryName) {
	return {
		type: types.SELECT_BASE_COUNTRY,
		countryName
	};
}

export function selectCompareToCountry(countryName) {
	return {
		type: types.SELECT_COMPARETO_COUNTRY,
		countryName
	};
}

export function deselectCompareToCountry(countryName) {
	return {
		type: types.DESELECT_COMPARETO_COUNTRY,
		countryName
	};
}
