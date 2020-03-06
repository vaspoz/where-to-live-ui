import React from 'react';
import {connect} from "react-redux";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import {Container} from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import {withRouter} from 'react-router';
import CompareToForm from "./compareToForm";

class CompareToPage extends React.Component {
	constructor(props, context) {
		super(props, context);
		let selectedCountries = [''];

		for (let i = 0; i < this.props.compareToList.length; i++) {
			selectedCountries[i] = this.props.compareToList[i];
		}

		this.state = {
			selectedCountries
		};

		this.addNewSelection = this.addNewSelection.bind(this);
		this.onDeleteItem = this.onDeleteItem.bind(this);
		this.onAddItem = this.onAddItem.bind(this);
		this.onSubmit = this.onSubmit.bind(this);

	}

	addNewSelection() {
		const newArr = this.state.selectedCountries;
		newArr.push('');
		this.setState({
			selectedCountries: newArr
		});
	}

	onDeleteItem(countryName) {
		const newArr = this.state.selectedCountries.filter(element => element !== countryName);
		this.setState({
			selectedCountries: newArr
		});
	}

	onAddItem(country) {
		const currentItems = this.state.selectedCountries;
		currentItems[currentItems.length - 1] = country;
		this.setState({
			selectedCountries: currentItems
		});
	}

	onSubmit() {
		this.props.history.push('/comparison-chart');
	}

	render() {
		return (
			<Container maxWidth={'xs'}>
				<CssBaseline/>
				<CompareToForm
					onDeleteItem={this.onDeleteItem}
					addNewSelection={this.addNewSelection}
					onSubmit={this.onSubmit}
					selectedCountries={this.state.selectedCountries}
					onAddItem={this.onAddItem}
				/>
			</Container>
		);
	}
}

CompareToPage.propTypes = {
	compareToList: PropTypes.array,
	history: PropTypes.object,
	classes: PropTypes.object
};

function mapStateToProps(store) {
	return {
		compareToList: store.compareTo.map(countryInfo => {
			return countryInfo.countryName;
		})
	};
}

export default withRouter(connect(mapStateToProps)(CompareToPage));
