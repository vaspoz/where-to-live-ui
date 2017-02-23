import React from 'react';
import {Table, TableBody, TableRow, TableRowColumn} from 'material-ui/Table';

class CountryTable extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.transformIndexToName = this.transformIndexToName.bind(this);
	}

	transformIndexToName(callback) {
		return (index) => {
			callback(this.props.countryList[index]);
		};
	}

	render() {
		return (
			<Table
				selectable={true}
				multiSelectable={true}
				onCellClick={this.transformIndexToName(this.props.onCountrySelect)}
			>
				<TableBody
					displayRowCheckbox={true}
					deselectOnClickaway={false}
				>
					{this.props.countryList.map((countryName, index) => {
						return (
							<TableRow key={index}>
								<TableRowColumn>{countryName}</TableRowColumn>
							</TableRow>
						);
					})}
				</TableBody>
			</Table>
		);
	}
}

CountryTable.propTypes = {
	countryList: React.PropTypes.array.isRequired,
	onCountrySelect: React.PropTypes.func.isRequired
};

export default CountryTable;
