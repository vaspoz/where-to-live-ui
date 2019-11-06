import React from 'react';
import PropTypes from "prop-types";
import AutoComplete from 'material-ui/AutoComplete';

const SelectItemField = ({countryList, onSelect, inputDisabled, isError, value}) => {
	return (
		<AutoComplete
			floatingLabelText="Select Country"
			filter={AutoComplete.caseInsensitiveFilter}
			menuStyle={{maxHeight: 300}}
			dataSource={countryList}
			onNewRequest={onSelect}
			searchText={value}
			disabled={inputDisabled}
			errorText={isError ? "Incorrect country name" : ""}
			errorStyle={{
				position: 'absolute',
				top: 65
			}}
		/>
	)
};

SelectItemField.propTypes = {
	onSelect: PropTypes.func.isRequired,
	countryList: PropTypes.array.isRequired,
	inputDisabled: PropTypes.bool.isRequired,
	isError: PropTypes.bool.isRequired,
	value: PropTypes.string
};

export default SelectItemField;
