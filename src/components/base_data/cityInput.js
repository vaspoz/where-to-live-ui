import React from 'react';
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
	data: React.PropTypes.array.isRequired,
	onCitySelect: React.PropTypes.func.isRequired,
	disable: React.PropTypes.bool.isRequired,
	isError: React.PropTypes.bool.isRequired
};

export default CityInput;
