import React from 'react';
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import * as countryActions from '../redux/actions/CountryActions';
import SelectItemField from './selectItemField';
import DeleteItem from './deleteItemButton';

class SelectItemComponent extends React.Component {
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

	onCountrySelect(countryName) {
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
			<div>
				<SelectItemField
					onSelect={this.onCountrySelect}
					countryList={this.props.countryList}
					inputDisabled={this.state.inputDisabled}
					isError={this.state.isError}
					value={this.state.chosenCountry}
				/>
				<DeleteItem deleteHandler={this.onDelete}/>
			</div>
		);
	}
}

SelectItemComponent.propTypes = {
	onDeleteItem: PropTypes.func.isRequired,
	onAddItem: PropTypes.func.isRequired,
	value: PropTypes.string.isRequired,
	countryActions: PropTypes.object,
	compareToList: PropTypes.array,
	countryList: PropTypes.array
};

function mapStateToProps(store) {
	return {
		countryList: store.countryList,
		compareToList: store.compareTo
	};
}

function mapDispatchToProps(dispatch) {
	return {
		countryActions: bindActionCreators(countryActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectItemComponent);
