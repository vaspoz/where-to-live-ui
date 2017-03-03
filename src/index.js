/* eslint-disable import/default */
import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {Router, browserHistory} from 'react-router';
import configureStore from './components/redux/store/CofigureStore.dev';
import {Provider} from 'react-redux';
import routes from './routes';
import './index.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {fetchCountryListFromBE} from './components/redux/actions/CountryActions';
import {syncHistoryWithStore} from 'react-router-redux';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {
	palette, checkbox, textField, raisedButton,
	table, tableFooter, tableHeader, tableHeaderColumn,
	tableRow
} from './colors';
const store = configureStore();
store.dispatch(fetchCountryListFromBE());


const muiTheme = getMuiTheme({
	palette,
	checkbox,
	textField,
	raisedButton,
	table,
	tableFooter,
	tableHeader,
	tableHeaderColumn,
	tableRow
});

const history = syncHistoryWithStore(browserHistory, store);

render(
	<Provider store={store}>
		<MuiThemeProvider muiTheme={muiTheme}>
			<Router history={history} routes={routes}/>
		</MuiThemeProvider>
	</Provider>,
	document.getElementById('app')
);
