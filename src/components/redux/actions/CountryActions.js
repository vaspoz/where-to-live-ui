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

export function fetchCountryCode(countryName) {
	return (dispatch) => {
		return api.getCountryCode(countryName)
			.then(code => {
				dispatch(fetchCountryCodeSuccess(countryName, code))
			})
			.catch(error => {
				console.error("Country's flag is not supported");
				dispatch(fetchCountryCodeSuccess("Netherlands", "NL"))
			});
	};
}

function fetchCountrySuccess(countryList) {
	return {
		type: types.FETCH_COUNTRY_LIST_SUCCESS,
		countryList
	};
}

function fetchCountryCodeSuccess(countryName, countryCode) {
	return {
		type: types.FETCH_COUNTRY_CODE,
		countryName,
		countryCode
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
