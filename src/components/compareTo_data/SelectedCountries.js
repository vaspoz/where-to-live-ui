import React from 'react';
import {List, ListItem} from 'material-ui/List';

const SelectedCountries = ({compareToList, onClickSelectedCountry}) => {
	const getInnerTextCountryName = (callback) => {
		return (context) => {
			return callback(context.target.innerText);
		};
	};
	return (
		<List>
			{compareToList.map(compareToElement => {
				return <ListItem primaryText={compareToElement} onClick={getInnerTextCountryName(onClickSelectedCountry)}/>;
			})}
		</List>
	);
};

SelectedCountries.propTypes = {
	compareToList: React.PropTypes.array.isRequired,
	onClickSelectedCountry: React.PropTypes.func.isRequired
};

export default SelectedCountries;
