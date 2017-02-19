import * as types from '../actions/ActionTypes';

export default function cityListReducer(state = [], action) {
	switch (action.type) {
		case types.CREATE_CITY_LIST:
			return action.cityList;
		default:
			return state;
	}
}

