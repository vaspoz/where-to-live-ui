import React from 'react';
import AutoComplete from 'material-ui/AutoComplete';

const CountryInput = ({data, onCountrySelect}) => {
		return (
			<div>
				<AutoComplete
					floatingLabelText="Country"
					filter={AutoComplete.caseInsensitiveFilter}
					dataSource={data}
					maxSearchResults={10}
					onNewRequest={onCountrySelect}
				/>
			</div>
		);
};
CountryInput.propTypes = {
	data: React.PropTypes.array.isRequired,
	onCountrySelect: React.PropTypes.func.isRequired
};


export default CountryInput;
