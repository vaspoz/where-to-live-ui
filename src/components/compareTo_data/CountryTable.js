import React from 'react';
import {
	Table, TableBody, TableRow, TableRowColumn
}
	from 'material-ui/Table';


const CountryTable = ({countryList, onCountrySelect}) => {
	function transformIndexToName(callback){
		return (index) => {
			callback(countryList[index]);
		}
	}

	return (
		<Table
			selectable={true}
			multiSelectable={true}
			onCellClick={transformIndexToName(onCountrySelect)}
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
	countryList: React.PropTypes.array.isRequired,
	onCountrySelect: React.PropTypes.func.isRequired
};

export default CountryTable;
