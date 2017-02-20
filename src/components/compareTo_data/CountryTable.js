import React from 'react';
import {Table, TableBody, TableRow, TableRowColumn} from 'material-ui/Table';

class CountryTable extends React.Component {
	constructor(props, context) {
		super(props, context);

		this.state = {
			rowsSelected: []
		};

		this.transformIndexToName = this.transformIndexToName.bind(this);
	}

	// BUG! Whenever I update state, this method triggers
	componentWillReceiveProps(nextProps) {
		const unsel = nextProps.unselectCountry;
		const list = nextProps.countryList;
		this.setState({
			rowsSelected: this.state.rowsSelected.filter(elt => elt !== list.indexOf(unsel))
		});
		console.log(`receive new props! ${unsel}. Set state: ${this.state.rowsSelected}`);
	}

	transformIndexToName(callback) {
		return (index) => {
			this.toggleRowInState(index);
			callback(this.props.countryList[index]);
		};
	}

	toggleRowInState(index) {
		debugger;
		const rowsSelectedArr = this.state.rowsSelected;
		if (rowsSelectedArr.includes(index)) {
			const newState = rowsSelectedArr.filter(el => el !== index);
			// Calling setState here causes whole component rerender. THerefore mentionedabove method triggers =\
			this.setState({rowsSelected: newState});
		} else {
			rowsSelectedArr.push(index);
			// here as well
			this.setState({rowsSelected: rowsSelectedArr});
		}
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
	onCountrySelect: React.PropTypes.func.isRequired,
	unselectCountry: React.PropTypes.string.isRequired
};

export default CountryTable;
