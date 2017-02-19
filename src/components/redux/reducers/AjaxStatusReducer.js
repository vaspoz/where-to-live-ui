import * as types from '../actions/ActionTypes';

export default function ajaxStatusReducer(state = 0, action) {
	switch (action.type) {
		case types.BEGIN_AJAX_CALL:
			return state + 1;
		default:
			if (action.type.substring(action.type.length - 8) == '_SUCCESS') {
				return state - 1;
			}
			return state;
	}

}
