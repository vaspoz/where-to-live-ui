import React from 'react';
import {connect} from 'react-redux';
import Paper from 'material-ui/Paper';
import SelectItemComponent from './SelectItemComponent';
import ControlButtons from './controlButtons';

class ComparisonDataInput extends React.Component {
	constructor(props, context) {
		super(props, context);

		this.state = {
			items: [0]
		};
		this.addNewSelection = this.addNewSelection.bind(this);
		this.onDeleteItem = this.onDeleteItem.bind(this);
	}

	addNewSelection() {
		const newArr = [];
		for (let i = 0; i <= this.state.items.length; i++) {
			newArr.push(i);
		}
		this.setState({
			items: newArr
		});
	}

	onDeleteItem(itemId) {
		return () => {
			this.setState({
				items: this.state.items.filter(item => item !== itemId)
			});
		}
	}

	render() {
		return (
			<Paper className="choose-country-container">
				<h1>Select countries of your dreams</h1>
				{this.state.items.map(item => {
					return <SelectItemComponent key={item} onDeleteItem={this.onDeleteItem(item)}/>;
				})}
				<br/>
				<ControlButtons addNewSelectionEventHandler={this.addNewSelection}/>
			</Paper>
		)
	}
}
ComparisonDataInput.propTypes = {
	compareToList: React.PropTypes.array
};

function mapStateToProps(store) {
	return {
		compareToList: store.compareTo
	};
}

export default connect(mapStateToProps)(ComparisonDataInput);
