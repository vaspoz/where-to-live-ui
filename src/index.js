/* eslint-disable import/default */
import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import configureStore from './components/redux/store/CofigureStore.dev';
import {Provider} from 'react-redux';
import './index.css';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import App from "./components/App";
import CssBaseline from "@material-ui/core/CssBaseline";

const store = configureStore();
const muiTheme = createMuiTheme();

render(
	<Provider store={store}>
		<ThemeProvider theme={muiTheme}>
			<BrowserRouter>
				<CssBaseline/>
				<App/>
			</BrowserRouter>
		</ThemeProvider>
	</Provider>,
	document.getElementById('app')
);
