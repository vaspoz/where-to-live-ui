import * as types from '../actions/ActionTypes';

export default function countryListReducer(state = [], action) {
	switch (action.type) {
		case types.FETCH_COUNTRY_LIST_SUCCESS:
			return action.countryList;
		default:
			return state;
	}
}
