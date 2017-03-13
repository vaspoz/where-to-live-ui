import * as types from '../actions/ActionTypes';

export default function globalSettingsReducer(state = {}, action) {
	switch (action.type) {
		case types.CHANGE_SORT_ORDER:
			return Object.assign(
				{},
				state,
				{sortOrder: action.sortOrder}
			);
		default:
			return state;
	}
}

