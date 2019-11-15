import * as types from '../actions/ActionTypes';

export default function ajaxStatusReducer(ajaxCount = 0, action) {
	switch (action.type) {
		case types.BEGIN_AJAX_CALL:
			return ajaxCount + 1;
		default:
			if (action.type.substring(action.type.length - 8) === '_AJAXEND') {
				return ajaxCount - 1;
			}
			return ajaxCount;
	}

}
