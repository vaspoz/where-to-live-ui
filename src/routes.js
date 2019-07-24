import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import BaseDataInput from './components/base_data/BaseDataInputPage';
import AboutPage from './components/about/AboutPage';
import ComparisonDataInput from './components/compareTo_data/ComparisonDataInput';
import Chart from './components/comparison_chart/ComparisonChartsPage';
import LoginPage from "./components/login_page/LoginPage";

export default (
	<Route path="/" component={App}>
		<IndexRoute component={BaseDataInput}/>
		<Route path="about" component={AboutPage}/>
		<Route path="dreams" component={ComparisonDataInput}/>
		<Route path="comparison-chart" component={Chart}/>
	</Route>
);
