import React from 'react';
import PropTypes from "prop-types";
import Paper from 'material-ui/Paper';
import {Bar} from 'react-chartjs-2';
import RefreshIndicator from 'material-ui/RefreshIndicator';

const style = {
	refresh: {
		display: 'inline-block',
		position: 'relative'
	}
};

const singleChart = ({country, chartData}) => {
	const getOptions = (title) => {
		return {
			scales: {
				yAxes: [{
					ticks: {
						beginAtZero: true
					}
				}]
			},
			layout: {
				padding: 20
			},
			maintainAspectRatio: false,
			title: {
				display: true,
				text: title
			}
		};
	};
	return (
		<Paper key={country} id="chart-paper" zDepth={2}>
			{chartData ?
				<Bar id="chart" data={chartData} options={getOptions(country)}/>
				:
				<RefreshIndicator
					left={0}
					top={230}
					size={40}
					style={style.refresh}
					status="loading"
				/>}
		</Paper>
	);
};

singleChart.propTypes = {
	chartData: PropTypes.object,
	country: PropTypes.string.isRequired
};

export default singleChart;
