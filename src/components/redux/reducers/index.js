import {combineReducers} from 'redux';
import countryList from './CountryListReducer';
import cityList from './CityListReducer';
import baseData from './BaseDataReducer';
import calculatedRates from './CalculatedRatesReducer';
import ajaxConnections from './AjaxStatusReducer';
import compareTo from './CompareToReducer';
import globalSettings from './GlobalSettingsReducer';
import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
	countryList,
	cityList,
	baseData,
	calculatedRates,
	ajaxConnections,
	compareTo,
	globalSettings,
	routing: routerReducer
});

export default rootReducer;
