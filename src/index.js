import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {Router, browserHistory} from 'react-router';
import configureStore from './components/redux/store/CofigureStore';
import {Provider} from 'react-redux';
import routes from './routes';
import './index.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {fetchCountryListFromBE} from './components/redux/actions/CountryActions';

const initialState = {
	// Country list to choose from in initial step
	countryList: [],
	// City list loaded after country chosen
	cityList: [],
	// Selecter pair Country-City from the list
	baseData: {
		country: "",
		city: ""
	},
	// Array of countries to compare with
	compareTo: [],
	// Calculated rates for chosen countries
	calculatedRates: [
		{
			country: "",
			cityRates: [
				{
					city: "",
					expenses: 0.00,
					salary: 0.00,
					overall: 0.00
				}
			]
		}
	]
};

const store = configureStore();
store.dispatch(fetchCountryListFromBE());

render(
	<Provider store={store}>
		<MuiThemeProvider>
			<Router history={browserHistory} routes={routes}/>
		</MuiThemeProvider>
	</Provider>,
	document.getElementById('app')
);
