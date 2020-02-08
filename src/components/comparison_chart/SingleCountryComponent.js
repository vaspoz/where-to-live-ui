import React from 'react';
import PropTypes from "prop-types";
import Grid from '@material-ui/core/Grid';
import ShortCountryOverview from "./short_overview/ShortCountryOverview";
import DetailedCountryChart from "./detailed_overview/DetailedCountryChart";
import * as chartActions from "../redux/actions/ChartActions";
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';
import {Grow} from "@material-ui/core";

class SingleCountryComponent extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			showFullChart: false
		};

		this.changeView = this.changeView.bind(this);

		let countryAlreadyCalculated = this.props.calculatedRates.some((elt) => {
			return elt.country === this.props.countryName;
		});

		if (!countryAlreadyCalculated) {
			this.props.chartActions.fetchChartForCountry(
				this.props.baseCountry,
				this.props.baseCity,
				this.props.countryName
			);
		}
	}

	changeView() {
		let origState = this.state.showFullChart;
		this.setState(
			{showFullChart: !origState}
		);
	}

	render() {
		return (
			<Grid item>
				{this.state.showFullChart ?
					<DetailedCountryChart countryName={this.props.countryName} onDetailsClick={this.changeView}/>
					:
					<ShortCountryOverview
						countryName={this.props.countryName}
						countryCode={this.props.countryCode}
						onDetailsClick={this.changeView}
					/>
				}
			</Grid>
		);
	}
}

SingleCountryComponent.propTypes = {
	countryName: PropTypes.string.isRequired,
	countryCode: PropTypes.string.isRequired,
	calculatedRates: PropTypes.array,
	chartActions: PropTypes.object,
	baseCity: PropTypes.string,
	baseCountry: PropTypes.string
};

function mapStateToProps(store) {
	return {
		baseCountry: store.baseData.country,
		baseCity: store.baseData.city,
		calculatedRates: store.calculatedRates
		// baseCountry: "Poland",
		// baseCity: "Gdansk"
	};
}

function mapDispatchToProps(dispatch) {
	return {
		chartActions: bindActionCreators(chartActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleCountryComponent);
