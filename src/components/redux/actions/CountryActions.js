import * as types from './ActionTypes';
import AjaxConnection from '../../ajax/AjaxConnection';

export function fetchCountryListFromBE() {
	return {
		type: types.FETCH_COUNTRY_LIST_FROM_BACKEND,
		countryList: AjaxConnection.getCountryList()
	};
}

export function selectCountry(countryName) {
	return {
		type: types.SELECT_COUNTRY,
		countryName
	};
}
