import * as types from './ActionTypes';

export function addCalculatedRates(calculatedRates) {
	return {
		type: types.BULK_ADD_CALCULATED_RATES_AJAXEND,
		calculatedRates
	};
}

export function cleanUpCalculatedRates() {
	return {
		type: types.CLEANUP_CALCULATED_RATES
	};
}
