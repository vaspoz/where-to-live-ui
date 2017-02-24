import React from 'react';
import {Table, TableBody, TableRow, TableRowColumn} from 'material-ui/Table';

const boolProps = {
	selectable: true,
	multiSelectable: true,
	displayRowCheckbox: true,
	deselectOnClickaway: false
};
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
				selectable={boolProps.selectable}
				multiSelectable={boolProps.multiSelectable}
				onCellClick={this.transformIndexToName(this.props.onCountrySelect)}
			>
				<TableBody
					displayRowCheckbox={boolProps.displayRowCheckbox}
					deselectOnClickaway={boolProps.deselectOnClickaway}
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
