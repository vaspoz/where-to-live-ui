import React from 'react';
import {connect} from "react-redux";
import PropTypes from "prop-types";
import AvatarElement from "./avatarElement";
import LabelElement from "./labelElement";
import SelectCountryComponent from "./SelectCountryComponent";
import ControlButtonsElement from "./controlButtonsElement";
import withStyles from "@material-ui/core/styles/withStyles";
import {Container, Paper} from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";

const styles = theme => {
	return {
		paper: {
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			padding: theme.spacing(5, 3),
			margin: theme.spacing(15, 3),
			height: '400px',
			width: '350px',
			position: "absolute",
			transition: 'box-shadow .3s'
		}
	}
};

class CompareToFormComponent extends React.Component {
	constructor(props, context) {
		super(props, context);
		let selectedCountries = ['a', 'b', 'c'];

		for (let i = 0; i < this.props.compareToList.length; i++) {
			selectedCountries[i] = this.props.compareToList[i];
		}

		this.state = {
			selectedCountries
		};

		this.addNewSelection = this.addNewSelection.bind(this);
		this.onDeleteItem = this.onDeleteItem.bind(this);
		this.onAddItem = this.onAddItem.bind(this);

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

	render() {
		const {classes} = this.props;
		return (
			<Container maxWidth={'xs'}>
				<CssBaseline/>
				<Paper className={classes.paper}>
					<AvatarElement/>
					<LabelElement/>
					{this.state.selectedCountries.map((selectedCountry, index) => {
						return (
							<SelectCountryComponent
								key = {selectedCountry + "_" + index}
								onDeleteItem={this.onDeleteItem}
								onAddItem={this.onAddItem}
								value={selectedCountry}
							/>
						);
					})}
					<ControlButtonsElement/>
				</Paper>
			</Container>
		);
	}
}

CompareToFormComponent.propTypes = {
	compareToList: PropTypes.array
};

function mapStateToProps(store) {
	return {
		compareToList: store.compareTo.map(countryInfo => {
			return countryInfo.countryName;
		})
	};
}

export default connect(mapStateToProps)(withStyles(styles)(CompareToFormComponent));
