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
import {syncHistoryWithStore} from 'react-router-redux';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import * as colors from './colors';

const store = configureStore();
store.dispatch(fetchCountryListFromBE());

const palette = {
	textColor: colors.blackboard,
	primary1Color: colors.oxblood,
	// accent3Color: colors.watermelon,
	// secondaryTextColor: colors.watermelon,
	// alternateTextColor: colors.watermelon,
	borderColor: colors.grain
	// disabledColor: colors.sky,
};
const checkbox = {
	boxColor: colors.blackboard,
	checkedColor: colors.blackboard,
};


const textField = {
	textColor: palette.textColor,
	floatingLabelColor: palette.textColor,
	// disabledTextColor: palette.disabledColor,
	// errorColor: _colors.red500,
	// focusColor: palette.primary1Color,
	// backgroundColor: 'transparent',
	// borderColor: palette.borderColor
};
const muiTheme = getMuiTheme({
	palette,
	checkbox,
	textField
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
