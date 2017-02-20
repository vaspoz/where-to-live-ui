import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as countryActions from '../redux/actions/CountryActions';
import * as cityActions from '../redux/actions/CityActions';
import CountryInput from './CountryInput';
import CityInput from './CityInput';
import SubmitButton from './Submit';

const styles = {
	container: {
		textAlign: 'center',
		paddingTop: 100,
		top: 50
	}
};

class BaseDataInput extends React.Component {
	constructor(props, context) {
		super(props, context);

		this.state = {
			submitDisable: true,
			cityInputDisable: true
		};
		this.onCitySelect = this.onCitySelect.bind(this);
		this.onCountrySelect = this.onCountrySelect.bind(this);
	}

	onCountrySelect(countryName) {
		this.props.countryActions.selectBaseCountry(countryName);
		this.props.cityActions.fetchCityList(countryName);
		this.setState({
			cityInputDisable: false
		});
	}

	onCitySelect(cityName) {
		this.props.cityActions.selectBaseCity(cityName);
		this.setState({
			submitDisable: false
		});
	}

	render() {
		return (
			<div style={styles.container}>
				<h1>Base Location</h1>
				<CountryInput data={this.props.countries} onCountrySelect={this.onCountrySelect}/>
				<CityInput data={this.props.cities} onCitySelect={this.onCitySelect} disable={this.state.cityInputDisable}/>
				<SubmitButton disabled={this.state.submitDisable}/>
			</div>
		);
	}
}

BaseDataInput.propTypes = {
	cityActions: React.PropTypes.object.isRequired,
	countryActions: React.PropTypes.object.isRequired,
	countries: React.PropTypes.array.isRequired,
	cities: React.PropTypes.array.isRequired
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
