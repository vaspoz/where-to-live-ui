import * as types from '../actions/ActionTypes';

export default function compareToReducer(state = [], action) {
	switch (action.type) {
		case types.SELECT_COMPARETO_COUNTRY: {
			const ar = [...state];
			ar.push({
				countryName: action.countryName
			});
			return ar;
		}
		case types.FETCH_COUNTRY_CODE: {
			const ar = [...state];
			const currentCountry = ar.filter(countryInfo => countryInfo.countryName === action.countryName);
			const updatedState = ar.filter(countryInfo => countryInfo.countryName !== action.countryName);
			const updatedCountry = {
				countryName: currentCountry[0].countryName,
				countryCode: action.countryCode
			};
			updatedState.push(updatedCountry);
			return updatedState;
		}
		case types.DESELECT_COMPARETO_COUNTRY:
			return state.filter(countryInfo => countryInfo.countryName !== action.countryName);
		default:
			return state;
	}
}
