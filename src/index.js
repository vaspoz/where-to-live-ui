/* eslint-disable import/default */
import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import configureStore from './components/redux/store/CofigureStore.dev';
import {Provider} from 'react-redux';
import './index.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import App from "./components/App";

const store = configureStore();
const muiTheme = getMuiTheme();

render(
	<Provider store={store}>
		<MuiThemeProvider muiTheme={muiTheme}>
			<BrowserRouter>
				<App/>
			</BrowserRouter>
		</MuiThemeProvider>
	</Provider>,
	document.getElementById('app')
);
