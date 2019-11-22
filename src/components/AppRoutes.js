import React from 'react';
import {CSSTransition, TransitionGroup} from "react-transition-group";
import SignupPage from "./signup/SignupPage";
import Chart from "./comparison_chart/ComparisonChartsPage";
import {Switch, Route, useLocation} from "react-router-dom";
import LoginPage from "./login_page/LoginPage";
import AboutPage from "./about/AboutPage";
import AboutPageMock from "./about/AboutPageMock";
import BaseDataPage from "./base_data/BaseDataPage";
import CompareToFormComponent from "./compareTo_data/CompareToFormComponent";

const AppRoutes = () => {
	let location = useLocation();

	return (
		<TransitionGroup>
			<CSSTransition
				key={location.key}
				appear={true}
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
						<BaseDataPage />
					</Route>
					<Route path="/compare-with">
						<CompareToFormComponent/>
					</Route>
					<Route path="/comparison-chart">
						<Chart/>
					</Route>
					<Route path="/">
						<AboutPageMock/>
					</Route >
				</Switch>
			</CSSTransition>
		</TransitionGroup>
	)
};

export default AppRoutes;
