import React from 'react';
import {connect} from 'react-redux';
import Chart from 'chart.js';
import Paper from 'material-ui/Paper';
import * as chartActions from '../redux/actions/ChartActions';
import {bindActionCreators} from 'redux';

const style = {
	paper: {
		height: 300,
		width: 500,
		margin: 20,
		textAlign: 'center',
		display: 'inline-block'
	},
	chart: {
		width: 'inherit',
		height: 'inherit'
	}
};

class ComparisonChart extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {};
	}

	componentDidMount() {
		this.props.chartActions.fetchChartsForCountries(
			this.props.baseCountry,
			this.props.baseCity,
			this.props.compareToList
		);

		const ctx = document.getElementById('myChart');
		new Chart(ctx, {
			type: 'bar',
			data: {
				labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
				datasets: [{
					label: '# of Votes',
					data: [12, 19, 3, 5, 2, 3],
					backgroundColor: [
						'rgba(255, 99, 132, 0.2)',
						'rgba(54, 162, 235, 0.2)',
						'rgba(255, 206, 86, 0.2)',
						'rgba(75, 192, 192, 0.2)',
						'rgba(153, 102, 255, 0.2)',
						'rgba(255, 159, 64, 0.2)'
					],
					borderColor: [
						'rgba(255,99,132,1)',
						'rgba(54, 162, 235, 1)',
						'rgba(255, 206, 86, 1)',
						'rgba(75, 192, 192, 1)',
						'rgba(153, 102, 255, 1)',
						'rgba(255, 159, 64, 1)'
					],
					borderWidth: 1
				}]
			},
			options: {
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
				maintainAspectRatio: false
			}
		});
	}

	render() {
		return (
			<div>
				<h1>There will be a Charts soon</h1>

				<Paper style={style.paper} zDepth={2}>
					<div style={style.chart}>
						<canvas id="myChart"/>
					</div>
				</Paper>
			</div>
		);
	}
}

ComparisonChart.propTypes = {
	store: React.PropTypes.object.isRequired,
	baseCountry: React.PropTypes.string.isRequired,
	baseCity: React.PropTypes.string.isRequired,
	compareToList: React.PropTypes.array.isRequired,
	calculatedRates: React.PropTypes.object.isRequired,
	chartActions: React.PropTypes.object.isRequired
};

function mapStateToProps(store) {
	return {
		store: store,
		baseCountry: store.baseData.country,
		baseCity: store.baseData.city,
		compareToList: store.compareTo,
		calculatedRates: store.calculatedRates
	};
}

function mapDispatchToProps(dispatch) {
	return {
		chartActions: bindActionCreators(chartActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(ComparisonChart);
