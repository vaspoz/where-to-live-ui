import * as types from './ActionTypes';
import api from '../../ajax/api';
import beginAjaxCall from '../actions/AjaxStatusActions';

export function fetchCityList(countryName) {
	return (dispatch) => {
		dispatch(beginAjaxCall());
		return api.getCityList(countryName)
			.then(cityList => dispatch(fetchCityListSuccess(cityList)))
			.catch(error => {
				throw(error)
			});
	}
}
export function fetchCityListSuccess(cityList) {
	return {
		type: types.FETCH_CITY_LIST_SUCCESS,
		cityList
	};
}

export function selectCity(cityName) {
	return {
		type: types.SELECT_CITY,
		cityName
	};
}
