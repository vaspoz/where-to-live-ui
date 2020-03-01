import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import {Container} from "@material-ui/core";
import PropTypes from "prop-types";
import * as countryActions from "../redux/actions/CountryActions";
import * as calculatedRatesActions from '../redux/actions/CalculatedRatesActions';
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';
import {withRouter} from 'react-router';
import * as cityActions from '../redux/actions/CityActions';
import BaseDataForm from "./baseDataForm";

class BaseDataPage extends React.Component {
	constructor(props, context) {
		super(props, context);
		let isBaseDateHere = this.props.baseCountry && this.props.baseCity;
		this.state = {
			innerKey: 1,
			countryInputDisabled: false,
			cityInputDisabled: true,
			submitDisabled: !isBaseDateHere,
			resetDisabled: !isBaseDateHere || this.props.isTestUser,
			baseCountry: isBaseDateHere ? this.props.baseCountry : "",
			baseCity: isBaseDateHere ? this.props.baseCity : ""
		};

		this.onCitySelect = this.onCitySelect.bind(this);
		this.onCountrySelect = this.onCountrySelect.bind(this);
		this.onReset = this.onReset.bind(this);
		this.onSubmit = this.onSubmit.bind(this);

		this.props.countryActions.fetchCountryListFromBE();

	}

	onCountrySelect(event, countryName) {
		if (!countryName) return;
		this.props.countryActions.selectBaseCountry(countryName);
		this.props.cityActions.fetchCityList(countryName);

		this.setState({
			countryInputDisabled: true,
			cityInputDisabled: false
		});
	}

	onCitySelect(event, cityName) {
		if (!cityName) return;
		this.props.cityActions.selectBaseCity(cityName);
		this.setState({
			submitDisabled: false,
			cityInputDisabled: true
		});
	}

	onReset() {
		this.props.countryActions.selectBaseCountry("");
		this.props.cityActions.selectBaseCity("");
		this.props.calculatedRatesActions.cleanUpCalculatedRates();

		this.setState({
			countryInputDisabled: false,
			cityInputDisabled: true,
			submitDisabled: true,
			innerKey: ++this.state.innerKey,
			baseCountry: "",
			baseCity: ""
		});
	}

	onSubmit() {
		this.props.history.push('/compare-with');
	}

	render() {
		return (
			<Container maxWidth={'xs'}>
				<CssBaseline/>
				<BaseDataForm
					key={this.state.innerKey}
					submitDisabled={this.state.submitDisabled}
					resetDisabled={this.state.resetDisabled}
					countryList={this.props.countries}
					cityList={this.props.cities}
					onCountrySelect={this.onCountrySelect}
					onCitySelect={this.onCitySelect}
					countryInputDisabled={this.state.countryInputDisabled}
					cityInputDisabled={this.state.cityInputDisabled}
					onReset={this.onReset}
					onSubmit={this.onSubmit}
					countryValue={this.state.baseCountry}
					cityValue={this.state.baseCity}
				/>
			</Container>
		);
	}
}

BaseDataPage.propTypes = {
	baseCountry: PropTypes.string,
	baseCity: PropTypes.string,
	cityActions: PropTypes.object.isRequired,
	countryActions: PropTypes.object.isRequired,
	countries: PropTypes.array.isRequired,
	cities: PropTypes.array.isRequired,
	calculatedRatesActions: PropTypes.object.isRequired,
	history: PropTypes.object.isRequired,
	isTestUser: PropTypes.bool
};

function mapDispatchToProps(dispatch) {
	return {
		countryActions: bindActionCreators(countryActions, dispatch),
		cityActions: bindActionCreators(cityActions, dispatch),
		calculatedRatesActions: bindActionCreators(calculatedRatesActions, dispatch)
	};
}

function mapStateToProps(state) {
	return {
		state: state,
		countries: state.countryList,
		cities: state.cityList,
		baseCountry: state.baseData.country,
		baseCity: state.baseData.city,
		isTestUser: state.globalSettings.currentUser.username === 'a'
	};
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BaseDataPage));
