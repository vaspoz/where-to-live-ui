import * as types from '../actions/ActionTypes';

export default function calculatedRatesReducer(state = {}, action) {
	switch (action.type) {
		case types.BULK_ADD_CALCULATED_RATES_SUCCESS:
			return Object.assign(
				{},
				state,
				{calculatedRates: action.calculatedRates}
			);
		default:
			return state;
	}
}

