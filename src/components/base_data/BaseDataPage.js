import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import {Container} from "@material-ui/core";
import PropTypes from "prop-types";
import * as countryActions from "../redux/actions/CountryActions";
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';
import {withRouter} from 'react-router';
import * as cityActions from '../redux/actions/CityActions';
import BaseDataForm from "./baseDataForm";

class BaseDataPage extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			innerKey: 1,
			countryInputDisabled: false,
			cityInputDisabled: true,
			submitDisabled: true
		};

		this.onCitySelect = this.onCitySelect.bind(this);
		this.onCountrySelect = this.onCountrySelect.bind(this);
		this.onReset = this.onReset.bind(this);

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
		this.setState({
			countryInputDisabled: false,
			cityInputDisabled: true,
			submitDisabled: true,
			innerKey: ++this.state.innerKey
		})
	}

	render() {
		console.log('new key: '+ this.state.innerKey);
		return (
			<Container maxWidth={'xs'}>
				<CssBaseline/>
				<BaseDataForm
					key={this.state.innerKey}
					submitDisabled={this.state.submitDisabled}
					countryList={this.props.countries}
					cityList={this.props.cities}
					onCountrySelect={this.onCountrySelect}
					onCitySelect={this.onCitySelect}
					countryInputDisabled={this.state.countryInputDisabled}
					cityInputDisabled={this.state.cityInputDisabled}
					onReset={this.onReset}
				/>
			</Container>
		);
	}
}

BaseDataPage.propTypes = {
	cityActions: PropTypes.object.isRequired,
	countryActions: PropTypes.object.isRequired,
	countries: PropTypes.array.isRequired,
	cities: PropTypes.array.isRequired
};

function mapDispatchToProps(dispatch) {
	return {
		countryActions: bindActionCreators(countryActions, dispatch),
		cityActions: bindActionCreators(cityActions, dispatch)
	};
}

function mapStateToProps(state) {
	return {
		state: state,
		countries: state.countryList,
		cities: state.cityList
	};
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BaseDataPage));
