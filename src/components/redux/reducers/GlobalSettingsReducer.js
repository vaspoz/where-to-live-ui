import * as types from '../actions/ActionTypes';

export default function globalSettingsReducer(state = {}, action) {
	switch (action.type) {
		case types.CHANGE_SORT_ORDER:
			return Object.assign(
				{},
				state,
				{sortOrder: action.sortOrder}
			);
		case types.SIGNUP_USER_SUCCESS:
			return Object.assign(
				{},
				state,
				{jwt: action.jwt}
			);
		case types.LOGIN_USER_SUCCESS:
			return Object.assign(
				{},
				state,
				{jwt: action.jwt}
			);
		default:
			return state;
	}
}
