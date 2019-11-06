import React from 'react';
import PropTypes from "prop-types";
import AutoComplete from 'material-ui/AutoComplete';

const CityInput = ({data, disable, onCitySelect, isError}) => {
	return (
		<div>
			<AutoComplete
				floatingLabelText="City"
				filter={AutoComplete.caseInsensitiveFilter}
				dataSource={data}
				maxSearchResults={10}
				disabled={disable}
				onNewRequest={onCitySelect}
				errorText={isError ? "Incorrect country name" : ""}
				errorStyle={{
					position: 'absolute',
					top: 65
				}}
			/>
		</div>
	);
};

CityInput.propTypes = {
	data: PropTypes.array.isRequired,
	onCitySelect: PropTypes.func.isRequired,
	disable: PropTypes.bool.isRequired,
	isError: PropTypes.bool.isRequired
};

export default CityInput;
