import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {Main} from './app/main';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Ajax from './Connector';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const ajax = new Ajax();
const fetchCOuntriesList = function (data) {
  ReactDOM.render(
    <MuiThemeProvider>
      <Main
        countriesList={JSON.parse(data)}
      />
    </MuiThemeProvider>,
    document.getElementById('root')
  );
};

ajax.getRequest("http://localhost:8080/countries", fetchCOuntriesList);
