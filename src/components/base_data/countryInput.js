import React from 'react';
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
	data: React.PropTypes.array.isRequired,
	onCountrySelect: React.PropTypes.func.isRequired,
	isError: React.PropTypes.bool.isRequired
};


export default CountryInput;
