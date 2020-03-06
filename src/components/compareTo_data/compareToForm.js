import React from 'react';
import {connect} from "react-redux";
import PropTypes from "prop-types";
import AvatarElement from "./elements/avatarElement";
import LabelElement from "./elements/labelElement";
import SelectCountryComponent from "./elements/SelectCountryComponent";
import ControlButtonsElement from "./elements/controlButtonsElement";
import withStyles from "@material-ui/core/styles/withStyles";
import {Container, makeStyles, Paper} from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import {withRouter} from 'react-router';

const useStyles = makeStyles(theme => ({
	paper: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		padding: theme.spacing(3),
		marginTop: theme.spacing(20),
		height: '400px',
		width: '350px',
		position: "absolute",
		transition: 'box-shadow .3s'
	},
	countryListItem: {
		margin: theme.spacing(0)
	}
}));

const CompareToForm = ({selectedCountries, onDeleteItem, onAddItem, addNewSelection, onSubmit}) => {
	const classes = useStyles();

	return (
		<Paper className={classes.paper}>
			<AvatarElement/>
			<LabelElement/>
			{selectedCountries.map((selectedCountry, index) => {
				return (
					<SelectCountryComponent
						key={selectedCountry + "_" + index}
						onDeleteItem={onDeleteItem}
						onAddItem={onAddItem}
						value={selectedCountry}
						className={classes.countryListItem}
					/>
				);
			})}
			<ControlButtonsElement
				addButtonDisabled={selectedCountries.length >= 3}
				addNewSelectionEventHandler={addNewSelection}
				onSubmit={onSubmit}
			/>
		</Paper>
	);
};

CompareToForm.propTypes = {
	selectedCountries: PropTypes.array.isRequired,
	onDeleteItem: PropTypes.func.isRequired,
	onAddItem: PropTypes.func.isRequired,
	addNewSelection: PropTypes.func.isRequired,
	onSubmit: PropTypes.func.isRequired
};

export default CompareToForm;
