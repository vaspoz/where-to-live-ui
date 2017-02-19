import * as types from './ActionTypes';

export function createCityList(cityList) {
	return {
		type: types.CREATE_CITY_LIST,
		cityList
	};
}

export function selectCity(cityName) {
	return {
		type: types.SELECT_CITY,
		cityName
	};
}
