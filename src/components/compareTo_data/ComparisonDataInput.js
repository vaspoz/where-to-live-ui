import React from 'react';
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import Paper from 'material-ui/Paper';
import SelectItemComponent from './SelectItemComponent';
import ControlButtons from './controlButtons';

class ComparisonDataInput extends React.Component {
	constructor(props, context) {
		super(props, context);
		let items = [''];

		for (let i = 0; i < this.props.compareToList.length; i++) {
			items[i] = this.props.compareToList[i];
		}

		this.state = {
			items
		};

		this.addNewSelection = this.addNewSelection.bind(this);
		this.onDeleteItem = this.onDeleteItem.bind(this);
		this.onAddItem = this.onAddItem.bind(this);
	}

	addNewSelection() {
		const newArr = this.state.items;
		newArr.push('');
		this.setState({
			items: newArr
		});
	}

	onDeleteItem(countryName) {
		const newArr = this.state.items.filter(element => element !== countryName);
		this.setState({
			items: newArr
		});
	}

	onAddItem(country) {
		const currentItems = this.state.items;
		currentItems[currentItems.length - 1] = country;
		this.setState({
			items: currentItems
		});
	}

	render() {
		return (
			<Paper className="choose-country-container">
				<h1>Select countries of your dreams</h1>
				{this.state.items.map((item, index) => {
					return (
						<SelectItemComponent
							key={item + "_" + index}
							onDeleteItem={this.onDeleteItem}
							onAddItem={this.onAddItem}
							value={item}/>
					);
				})}
				<br/>
				<ControlButtons addNewSelectionEventHandler={this.addNewSelection}
												addButtonDisabled={this.state.items.length >= 3}/>
			</Paper>
		);
	}
}

ComparisonDataInput.propTypes = {
	compareToList: PropTypes.array
};

function mapStateToProps(store) {
	return {
		compareToList: store.compareTo.map(countryInfo => {
			return countryInfo.countryName;
		})
	};
}

export default connect(mapStateToProps)(ComparisonDataInput);
