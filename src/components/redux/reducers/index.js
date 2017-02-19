import {combineReducers} from 'redux';
import countryList from './CountryListReducer';
import cityList from './CityListReducer';
import baseData from './BaseDataReducer';
import calculatedRates from './CalculatedRatesReducer';
import ajaxConnections from './AjaxStatusReducer';

const rootReducer = combineReducers({
	countryList,
	cityList,
	baseData,
	calculatedRates,
	ajaxConnections
});

export default rootReducer;
