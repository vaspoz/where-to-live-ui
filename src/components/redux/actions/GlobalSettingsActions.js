import * as types from './ActionTypes';

export function changeSortOrder(newOrder) {
	return {
		type: types.CHANGE_SORT_ORDER,
		sortOrder: newOrder
	};
}
