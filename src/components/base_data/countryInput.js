import React from 'react';
import PropTypes from "prop-types";
import AutoComplete from 'material-ui/AutoComplete';

const CountryInput = ({data, onCountrySelect, isError}) => {
		return (
			<div>
				<AutoComplete
					floatingLabelText="Country"
					filter={AutoComplete.caseInsensitiveFilter}
					dataSource={data}
					maxSearchResults={10}
					onNewRequest={onCountrySelect}
					errorText={isError ? "Incorrect country name" : ""}
					errorStyle={{
						position: 'absolute',
						top: 65
					}}
				/>
			</div>
		);
};
CountryInput.propTypes = {
	data: PropTypes.array.isRequired,
	onCountrySelect: PropTypes.func.isRequired,
	isError: PropTypes.bool.isRequired
};


export default CountryInput;
