/* eslint-disable import/default */
import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import configureStore from './components/redux/store/CofigureStore.dev';
import {Provider} from 'react-redux';
import './index.css';
import {ThemeProvider} from '@material-ui/core/styles';
import App from "./components/App";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from './ui/theme/v3/index';
import './images/favicon.png';

const store = configureStore();

render(
	<Provider store={store}>
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<CssBaseline/>
				<App/>
			</BrowserRouter>
		</ThemeProvider>
	</Provider>,
	document.getElementById('app')
);
