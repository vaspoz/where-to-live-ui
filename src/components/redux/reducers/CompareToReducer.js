import * as types from '../actions/ActionTypes';

export default function compareToReducer(state = [], action) {
	switch (action.type) {
		case types.SELECT_COMPARETO_COUNTRY:
			return [...state].push(action.countryName);
		case types.DESELECT_COMPARETO_COUNTRY:
			return state.filter(countryName => countryName != action.countryName);
		default:
			return state;
	}
}
