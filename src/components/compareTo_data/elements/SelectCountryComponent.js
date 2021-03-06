import React from 'react';
import PropTypes from "prop-types";
import * as countryActions from "../../redux/actions/CountryActions";
import {connect} from "react-redux";
import SelectItemField from "./selectItemField";
import DeleteItem from "./deleteItemButton";
import {bindActionCreators} from "redux";
import {testUserName} from "../../global";

class SelectCountryComponent extends React.Component {
	constructor(props, context) {
		super(props, context);

		this.state = {
			chosenCountry: this.props.value || '',
			inputDisabled: !!this.props.value,
			isError: false
		};

		this.onCountrySelect = this.onCountrySelect.bind(this);
		this.onDelete = this.onDelete.bind(this);
	}

	onCountrySelect(event, countryName) {
		if (!this.props.countryList.includes(countryName)) {
			this.setState({
				isError: true
			});
			return;
		}
		this.props.countryActions.selectCompareToCountry(countryName);
		this.props.countryActions.fetchCountryCode(countryName);
		this.setState({
			isError: false,
			inputDisabled: true,
			chosenCountry: countryName
		});
		this.props.onAddItem(countryName);
	}

	onDelete() {
		this.props.countryActions.deselectCompareToCountry(this.state.chosenCountry);
		this.props.onDeleteItem(this.state.chosenCountry);
	}

	render() {
		return (
			<div className={this.props.className}>
				<SelectItemField
					onSelect={this.onCountrySelect}
					countryList={this.props.countryList}
					inputDisabled={this.state.inputDisabled}
					isError={this.state.isError}
					value={this.state.chosenCountry}
				/>
				<DeleteItem deleteHandler={this.onDelete} isDisabled={this.props.isTestUser}/>
			</div>
		);
	}
}

SelectCountryComponent.propTypes = {
	onDeleteItem: PropTypes.func.isRequired,
	onAddItem: PropTypes.func.isRequired,
	value: PropTypes.string.isRequired,
	countryActions: PropTypes.object,
	compareToList: PropTypes.array,
	countryList: PropTypes.array,
	className: PropTypes.string,
	isTestUser: PropTypes.bool
};

function mapStateToProps(store) {
	return {
		countryList: store.countryList,
		compareToList: store.compareTo,
		isTestUser: store.globalSettings.currentUser.username === testUserName
	};
}

function mapDispatchToProps(dispatch) {
	return {
		countryActions: bindActionCreators(countryActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectCountryComponent);
