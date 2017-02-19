import * as types from './ActionTypes';

export default function beginAjaxCall() {
	return {
		type: types.BEGIN_AJAX_CALL
	};
}
