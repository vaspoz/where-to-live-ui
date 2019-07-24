import React from 'react';
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
	onSelect: React.PropTypes.func.isRequired,
	countryList: React.PropTypes.array.isRequired,
	inputDisabled: React.PropTypes.bool.isRequired,
	isError: React.PropTypes.bool.isRequired,
	value: React.PropTypes.string
};

export default SelectItemField;
