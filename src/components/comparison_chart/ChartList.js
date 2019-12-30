import React from 'react';
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import SingleCountryComponent from './SingleCountryComponent';
import Grid from "@material-ui/core/Grid";
import {Container} from "@material-ui/core";

class ChartList extends React.Component {
	constructor(props, context) {
		super(props, context);
	}

	render() {
		return (
			<Grid item container
				spacing={4}
				alignItems="center"
				justify="space-around"
				style={{
					// minHeight: '90%',
					marginTop: '0px',
					marginBottom: '50px'
				}}

			>
				{this.props.compareToList.map((country, index) => {
					return (
						<SingleCountryComponent
							key={country.countryName + "_" + index}
							countryName={country.countryName}
							countryCode={country.countryCode}/>
					);
				})}
			</Grid>
		);
	}
}

/*
				<SingleCountryComponent key={'Netherlands'} countryName={'Netherlands'} countryCode={'NL'} />

 */
ChartList.propTypes = {
	compareToList: PropTypes.array.isRequired,
};

function mapStateToProps(store) {
	return {
		compareToList: store.compareTo,
		calculatedRates: store.calculatedRates
	};
}

function tempMapStateToProps(store) {
	return {
		compareToList: [
			{
				countryName: 'Netherlands',
				countryCode: 'NL'
			},
			{
				countryName: 'Netherlands',
				countryCode: 'NL'
			},
			// {
			// 	countryName: 'Netherlands',
			// 	countryCode: 'NL'
			// },
			// {
			// 	countryName: 'Netherlands',
			// 	countryCode: 'NL'
			// },
			// {
			// 	countryName: 'Netherlands',
			// 	countryCode: 'NL'
			// }
		],
		calculatedRates: store.calculatedRates
	};
}

export default connect(tempMapStateToProps, null)(ChartList);
