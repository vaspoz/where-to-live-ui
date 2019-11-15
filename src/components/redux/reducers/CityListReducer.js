import * as types from '../actions/ActionTypes';

export default function cityListReducer(state = [], action) {
	switch (action.type) {
		case types.FETCH_CITY_LIST_AJAXEND:
			return action.cityList;
		default:
			return state;
	}
}
