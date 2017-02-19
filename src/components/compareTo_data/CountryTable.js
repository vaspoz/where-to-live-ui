import React from 'react';
import {
	Table, TableBody, TableRow, TableRowColumn
}
	from 'material-ui/Table';

const styles = {
	container: {
		width: '300px',
		textAlign: 'center',
		border: 'solid',
		borderColor: 'black'
	}
};

const CountryTable = ({countryList}) => {
		return (
			<div style={styles.container}>
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
			</div>
		);
};

CountryTable.propTypes = {
	countryList: React.PropTypes.array.isRequired
};
export default CountryTable;
