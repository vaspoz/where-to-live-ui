import React from 'react';
import {CSSTransition, TransitionGroup} from "react-transition-group";
import SignupPage from "./signup/SignupPage";
import BaseDataInput from "./base_data/BaseDataInputPage";
import ComparisonDataInput from "./compareTo_data/ComparisonDataInput";
import Chart from "./comparison_chart/ComparisonChartsPage";
import {Switch, Route, useLocation} from "react-router-dom";
import LoginPage from "./login_page/LoginPage";
import AboutPage from "./about/AboutPage";
import AboutPageMock from "./about/AboutPageMock";

const AppRoutes = () => {
	let location = useLocation();

	return (
		<TransitionGroup>
			<CSSTransition
				key={location.key}
				classNames="fade"
				timeout={300}
			>
				<Switch location={location}>
					<Route path="/login">
						<LoginPage/>
					</Route>
					<Route path="/signup">
						<SignupPage/>
					</Route>
					<Route path="/base-data">
						<BaseDataInput/>
					</Route>
					<Route path="/compare-with">
						<ComparisonDataInput/>
					</Route>
					<Route path="/comparison-chart">
						<Chart/>
					</Route>
					<Route path="/">
						<AboutPageMock/>
					</Route>
				</Switch>
			</CSSTransition>
		</TransitionGroup>
	)
};

export default AppRoutes;
