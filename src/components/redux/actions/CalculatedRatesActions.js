import * as types from './ActionTypes';

export function addCalculatedRates(calculatedRates) {
	return {
		type: types.BULK_ADD_CALCULATED_RATES,
		calculatedRates
	};
}
