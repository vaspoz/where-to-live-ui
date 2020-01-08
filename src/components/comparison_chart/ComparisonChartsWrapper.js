import React from 'react';
import {Container} from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import ChartList from "./ChartList";

const ComparisonChartsWrapper = () => {
	return (
		<Container
			maxWidth={'xl'}
			style={{position: 'absolute'}}
		>
			<CssBaseline/>
			<ChartList/>
		</Container>
	);
};

export default ComparisonChartsWrapper;
