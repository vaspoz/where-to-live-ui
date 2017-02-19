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
