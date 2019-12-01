import React from 'react';
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	submit: {
		backgroundColor: theme.palette.primary.main,
		'&:hover': {
			backgroundColor: theme.palette.primary.dark
		}
	},
	reset: {
		backgroundColor: theme.palette.secondary.main,
		'&:hover': {
			backgroundColor: theme.palette.secondary.dark
		}
	},
	wrapper: {
		marginTop: theme.spacing(0),
		position: "inherit",
		bottom: theme.spacing(3),
		left: 0
	}
}));

const ControlButtonsElement = ({addNewSelectionEventHandler, addButtonDisabled, onSubmit}) => {
	const classes = useStyles();
	return (
		<Grid container justify="center" spacing={6} className={classes.wrapper}>
			<Grid key={1} item>
				<Button
					fullWidth
					variant="contained"
					color="primary"
					className={classes.reset}
					disabled={addButtonDisabled}
					onClick={addNewSelectionEventHandler}
				>
					Add
				</Button>
			</Grid>
			<Grid key={2} item>
				<Button
					fullWidth
					variant="contained"
					color="primary"
					className={classes.submit}
					onClick={onSubmit}
				>
					Submit
				</Button>
			</Grid>
		</Grid>
	)
};

ControlButtonsElement.propTypes = {
	addNewSelectionEventHandler: PropTypes.func.isRequired,
	onSubmit: PropTypes.func.isRequired,
	addButtonDisabled: PropTypes.bool.isRequired
};

export default ControlButtonsElement;
