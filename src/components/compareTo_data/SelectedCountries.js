import React from 'react';
import {List, ListItem} from 'material-ui/List';

const SelectedCountries = ({compareToList}) => {
	return (
		<List>
			{compareToList.map((compareToElement, index) => {
				return (
					<div>
						<ListItem key={index} primaryText={compareToElement}/>
					</div>
				)
			})}
		</List>
	);
};


SelectedCountries.propTypes = {
	compareToList: React.PropTypes.array.isRequired
};

export default SelectedCountries;
