import React from 'react';
import BaseDataButton from "./baseDataButton";
import CompareToButton from "./compareToButton";
import CountriesOverviewButton from "./countriesOverviewButton";
import {connect} from "react-redux";

export var testvar = "";

class FooterButtons extends React.Component {
	constructor(props, context) {
		super(props, context);


		this.state = {
		};

		console.log(this.props);
	}

	render() {
		return (
			<div style={{display: 'flex'}}>
				<BaseDataButton isDisabled={this.props.baseDataButtonDisabled}/>
				<CompareToButton isDisabled={this.props.compareToButtonDisabled}/>
				<CountriesOverviewButton isDisabled={this.props.countriesOverviewButtonDisabled}/>
			</div>
		);
	}
}

function mapStateToProps(state) {
	let baseDataButtonDisabled = !state.globalSettings.authorized;
	let compareToButtonDisabled = baseDataButtonDisabled || !state.baseData.city;
	let	countriesOverviewButtonDisabled = compareToButtonDisabled || !state.compareTo[0] || !state.compareTo[0].countryName;

	return {
		state,
		baseDataButtonDisabled,
		compareToButtonDisabled,
		countriesOverviewButtonDisabled
	};
}

export default connect(mapStateToProps, null)(FooterButtons);
