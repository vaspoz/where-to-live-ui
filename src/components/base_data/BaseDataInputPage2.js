import React from 'react';
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as countryActions from '../redux/actions/CountryActions';
import * as cityActions from '../redux/actions/CityActions';
import CountryInput from './countryInput';
import CityInput from './cityInput';
import SubmitButton from './submit';
import {Paper} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

const styles = {
	paper: {
		position: 'fixed',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		width: '320px',
		height: '400px',
		opacity: '0.8'
	},
	others: {
		textAlign: "center",
		position: "relative",
		top: '45%',
		left: '50%',
		transform: 'translate(-50%, -50%)'
	}
};

class BaseDataInput extends React.Component {
	constructor(props, context) {
		super(props, context);

		this.state = {
			submitDisable: true,
			cityInputDisable: true,
			countryError: false,
			cityError: false
		};
		this.onCitySelect = this.onCitySelect.bind(this);
		this.onCountrySelect = this.onCountrySelect.bind(this);

		this.props.countryActions.fetchCountryListFromBE();
	}

	onCountrySelect(countryName) {
		// if (!this.props.countries.includes(countryName)) {
		// 	this.setState({
		// 		countryError: true
		// 	});
		// 	return;
		// }
		this.props.countryActions.selectBaseCountry(countryName);
		this.props.cityActions.fetchCityList(countryName);
		this.setState({
			cityInputDisable: false,
			countryError: false
		});
	}

	onCitySelect(cityName) {
		if (!this.props.cities.includes(cityName)) {
			this.setState({
				cityError: true
			});
			return;
		}
		this.props.cityActions.selectBaseCity(cityName);
		this.setState({
			submitDisable: false,
			cityError: false
		});
	}

	render() {
		return (
			<Paper className="base-data-container" elevation={5}>
				<div className="base-data-text-container">
					<Typography color="primary" variant="h4">Base Location</Typography>
					<CountryInput
						data={this.props.countries}
						onCountrySelect={this.onCountrySelect}
						isError={this.state.countryError}
					/>
					<CityInput
						data={this.props.cities}
						onCitySelect={this.onCitySelect}
						disable={this.state.cityInputDisable}
						isError={this.state.cityError}
					/>
					<SubmitButton disabled={this.state.submitDisable}/>
				</div>
			</Paper>
		);
	}
}

BaseDataInput.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(BaseDataInput);
