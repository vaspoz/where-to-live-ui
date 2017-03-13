import * as types from '../actions/ActionTypes';

export default function calculatedRatesReducer(state = [], action) {
	switch (action.type) {
		case types.BULK_ADD_CALCULATED_RATES_SUCCESS:
			return action.calculatedRates;
		case types.ADD_CALCULATED_RATES_SUCCESS: {
			const curState = state.slice();
			curState.push(action.calculatedRates);
			return curState;
		}
		default:
			return state;
	}
}

