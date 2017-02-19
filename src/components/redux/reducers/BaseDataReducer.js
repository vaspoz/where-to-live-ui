import * as types from '../actions/ActionTypes';

export default function baseDataReducer(state = {}, action) {
	switch (action.type) {
		case types.SELECT_COUNTRY:
			return Object.assign(
				{},
				state,
				{country: action.countryName}
			);
		case types.SELECT_CITY:
			return Object.assign(
				{},
				state,
				{city: action.cityName}
			);
		default:
			return state;
	}
}

