/*eslint-disable react-jsx-boolean-value*/
import React from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import RaisedButton from 'material-ui/RaisedButton';
import {Table, TableBody, TableRow, TableRowColumn} from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import {Bar} from 'react-chartjs-2';
import randomColor from 'randomcolor';

const styles = {
	leftColumn: {
		textAlign: 'center',
		width: '50%',
		float: 'left'
	},
	rightColumn: {
		textAlign: 'center',
		marginLeft: '50%'
	},
	innerLeft: {
		width: '50%',
		float: 'left'
	},
	innerRight: {
		marginLeft: '50%'
	}
};
const getRandomColors = (amount, hue) => {
	return randomColor({
		count: amount,
		hue: hue,
		luminosity: 'light'
	});
};
const prepareCityRatesForChart = (cityRates) => {
	const labels = cityRates.map(singleCityRate => singleCityRate.city);
	return {
		labels: labels,
		datasets: [
			{
				label: 'Salary',
				data: cityRates.map(singleCityRate => singleCityRate.salary),
				backgroundColor: getRandomColors(labels.length, 'green'),
				borderWidth: 1
			},
			{
				label: 'Expenses',
				data: cityRates.map(singleCityRate => singleCityRate.expenses),
				backgroundColor: getRandomColors(labels.length, 'red')
			}
		]
	};
};
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
const mockCalculatedRates = [
	{
		"country": "Australia",
		"cityRates": [{"city": "Adelaide", "expenses": 145.87, "salary": 264.68, "overall": 0.0}, {
			"city": "Albany",
			"expenses": 150.78,
			"salary": 205.98,
			"overall": 0.0
		}, {"city": "Albury", "expenses": 157.12, "salary": 274.29, "overall": 0.0}, {
			"city": "Alice Springs",
			"expenses": 196.48,
			"salary": 145.63,
			"overall": 0.0
		}, {"city": "Ballarat", "expenses": 135.73, "salary": 180.72, "overall": 0.0}, {
			"city": "Bega NSW",
			"expenses": 147.43,
			"salary": 68.43,
			"overall": 0.0
		}, {"city": "Bendigo", "expenses": 138.05, "salary": 87.14, "overall": 0.0}, {
			"city": "Blacktown",
			"expenses": 141.67,
			"salary": 415.48,
			"overall": 0.0
		}, {"city": "Bowral", "expenses": 151.66, "salary": 835.72, "overall": 0.0}, {
			"city": "Brisbane",
			"expenses": 159.31,
			"salary": 300.1,
			"overall": 0.0
		}, {"city": "Broome, WA", "expenses": 181.13, "salary": 333.33, "overall": 0.0}, {
			"city": "Bunbury",
			"expenses": 155.34,
			"salary": 274.29,
			"overall": 0.0
		}, {"city": "Burnie", "expenses": 125.7, "salary": 367.86, "overall": 0.0}, {
			"city": "Cairns",
			"expenses": 159.25,
			"salary": 157.63,
			"overall": 0.0
		}, {"city": "Canberra", "expenses": 156.01, "salary": 351.47, "overall": 0.0}, {
			"city": "Casino, NSW",
			"expenses": 129.47,
			"salary": 250.9,
			"overall": 0.0
		}, {"city": "Darwin", "expenses": 189.18, "salary": 207.23, "overall": 0.0}, {
			"city": "Devonport",
			"expenses": 118.0,
			"salary": 87.14,
			"overall": 0.0
		}, {"city": "Dubbo", "expenses": 111.5, "salary": 133.93, "overall": 0.0}, {
			"city": "Eden NSW",
			"expenses": 121.15,
			"salary": 274.29,
			"overall": 0.0
		}, {"city": "Frankston", "expenses": 163.46, "salary": 567.41, "overall": 0.0}, {
			"city": "Geelong",
			"expenses": 133.9,
			"salary": 461.43,
			"overall": 0.0
		}, {"city": "Geraldton", "expenses": 120.34, "salary": 227.5, "overall": 0.0}, {
			"city": "Gold Coast",
			"expenses": 141.83,
			"salary": 239.78,
			"overall": 0.0
		}, {"city": "Gosford", "expenses": 165.31, "salary": 351.16, "overall": 0.0}, {
			"city": "Hervey Bay",
			"expenses": 145.91,
			"salary": 87.14,
			"overall": 0.0
		}, {"city": "Hobart", "expenses": 133.85, "salary": 177.08, "overall": 0.0}, {
			"city": "Hoppers Crossing",
			"expenses": 143.05,
			"salary": 87.14,
			"overall": 0.0
		}, {"city": "Kalgoorlie", "expenses": 188.94, "salary": 112.88, "overall": 0.0}, {
			"city": "Karratha",
			"expenses": 290.29,
			"salary": 87.14,
			"overall": 0.0
		}, {"city": "Lake Macquarie", "expenses": 152.82, "salary": 87.14, "overall": 0.0}, {
			"city": "Launceston",
			"expenses": 127.61,
			"salary": 87.14,
			"overall": 0.0
		}, {"city": "Melbourne", "expenses": 161.37, "salary": 314.01, "overall": 0.0}, {
			"city": "Newcastle",
			"expenses": 158.93,
			"salary": 282.38,
			"overall": 0.0
		}, {"city": "Nowra NSW", "expenses": 143.7, "salary": 180.72, "overall": 0.0}, {
			"city": "Orange, NSW",
			"expenses": 135.44,
			"salary": 302.86,
			"overall": 0.0
		}, {"city": "Parramatta", "expenses": 156.67, "salary": 350.92, "overall": 0.0}, {
			"city": "Perth",
			"expenses": 171.09,
			"salary": 297.83,
			"overall": 0.0
		}, {"city": "Port Macquarie", "expenses": 153.02, "salary": 274.29, "overall": 0.0}, {
			"city": "Sunshine Coast",
			"expenses": 148.99,
			"salary": 179.31,
			"overall": 0.0
		}, {"city": "Sydney", "expenses": 194.76, "salary": 333.43, "overall": 0.0}, {
			"city": "Toowoomba",
			"expenses": 131.4,
			"salary": 219.71,
			"overall": 0.0
		}, {"city": "Townsville", "expenses": 144.98, "salary": 276.23, "overall": 0.0}, {
			"city": "Wangaratta",
			"expenses": 125.93,
			"salary": 335.11,
			"overall": 0.0
		}, {"city": "Wollongong", "expenses": 154.41, "salary": 317.95, "overall": 0.0}]
	}
];
const table_entries = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const backgrnd = 'var(--color-background)';
const disabled = 'var(--color-disabled)';
const important = 'var(--color-important)';
const strong = 'var(--color-strong)';
const secondary = 'var(--color-secondary)';

class AboutPage extends React.Component {
	render() {
		return (
			<div style={{marginTop: 100}}>
				<div>
					<div style={{
						height: 100,
						width: 100,
						border: 'solid gray',
						backgroundColor: backgrnd,
						display: 'inline-block',
						margin: 5
					}}>backgrnd
					</div>
					<div style={{
						height: 100,
						width: 100,
						border: 'solid gray',
						backgroundColor: disabled,
						display: 'inline-block',
						margin: 5
					}}>disabled
					</div>
					<div style={{
						height: 100,
						width: 100,
						border: 'solid gray',
						backgroundColor: important,
						display: 'inline-block',
						margin: 5
					}}>important
					</div>
					<div style={{
						height: 100,
						width: 100,
						border: 'solid gray',
						backgroundColor: strong,
						display: 'inline-block',
						margin: 5
					}}>strong
					</div>
					<div style={{
						height: 100,
						width: 100,
						border: 'solid gray',
						backgroundColor: secondary,
						display: 'inline-block',
						margin: 5
					}}>secondary
					</div>
				</div>
				<div style={styles.leftColumn}>
					<div style={styles.innerLeft}>
						<Paper zDepth={4} style={{opacity: 0.8, width: 400}}>
							<h1>H1 header</h1>
							<h2>H2 header</h2>
							<AutoComplete
								floatingLabelText="Autocomplete"
								filter={AutoComplete.caseInsensitiveFilter}
								dataSource={['aaa', 'bbb', 'ccc']}
								openOnFocus
							/>
							<br/>
							<AutoComplete
								floatingLabelText="Autocomplete"
								filter={AutoComplete.caseInsensitiveFilter}
								disabled
								dataSource={[1, 2, 3, 4, 5]}
							/>
							<br/>
							<RaisedButton
								label="Submit enabled"
							/>
							<br/>
							<RaisedButton
								label="Submit disabled"
								disabled
							/>
						</Paper>
					</div>
					<div style={styles.innerRight}>
						<Table selectable multiSelectable>
							<TableBody displayRowCheckbox deselectOnClickaway={false}>
								{table_entries.map(elt => {
									return (
										<TableRow key={elt} selected={Math.random() > 0.5}>
											<TableRowColumn>Row {elt}</TableRowColumn>
										</TableRow>
									);
								})}
							</TableBody>
						</Table>
					</div>
				</div>
				<div style={styles.rightColumn}>
					{mockCalculatedRates.map(countryRate => {
						const chartData = prepareCityRatesForChart(countryRate.cityRates);
						return (
							<Paper id="chart-paper" zDepth={2} key={countryRate.country + "-001"}>
								<Bar id="chart" data={chartData} options={getOptions(countryRate.country)}/>
							</Paper>
						);
					})}
				</div>
			</div>
		);
	}
}

export default AboutPage;
