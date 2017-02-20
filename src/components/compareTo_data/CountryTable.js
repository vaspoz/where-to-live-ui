import React from 'react';
import {
	Table, TableBody, TableRow, TableRowColumn
}
	from 'material-ui/Table';

const CountryTable = ({countryList}) => {
	return (
		<Table
			selectable={true}
			multiSelectable={true}
		>
			<TableBody
				displayRowCheckbox={true}
				deselectOnClickaway={false}
			>
				{countryList.map((countryName, index) => (
					<TableRow key={index}>
						<TableRowColumn>{countryName}</TableRowColumn>
					</TableRow>
				))}
			</TableBody>
		</Table>
	);
};

CountryTable.propTypes = {
	countryList: React.PropTypes.array.isRequired
};
export default CountryTable;
