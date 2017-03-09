import React from 'react';
import AutoComplete from 'material-ui/AutoComplete';

const SelectItemField = ({countryList, onSelect, inputDisabled}) => {
	return (
		<AutoComplete
			floatingLabelText="Select Country"
			filter={AutoComplete.caseInsensitiveFilter}
			menuStyle={{maxHeight: 300}}
			dataSource={countryList}
			onNewRequest={onSelect}
			disabled={inputDisabled}
		/>
	)
};

SelectItemField.propTypes = {
	onSelect: React.PropTypes.func.isRequired,
	countryList: React.PropTypes.array.isRequired,
	inputDisabled: React.PropTypes.bool.isRequired
};

export default SelectItemField;
