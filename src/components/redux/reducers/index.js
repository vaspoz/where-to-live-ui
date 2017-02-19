import {combineReducers} from 'redux';
import countryList from './CountryListReducer';
import cityList from './CityListReducer';
import baseData from './BaseDataReducer';
import calculatedRates from './CalculatedRatesReducer';

const rootReducer = combineReducers({
	countryList,
	cityList,
	baseData,
	calculatedRates
});

export default rootReducer;
