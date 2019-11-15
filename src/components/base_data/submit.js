import React from 'react';
import PropTypes from "prop-types";
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';
import {Link as RouterLink} from "react-router-dom";
import {blue, green} from "@material-ui/core/colors";

const useStyles = makeStyles(theme => ({
	submit: {
		margin: theme.spacing(0),
		backgroundColor: blue[500],
		'&:hover': {
			backgroundColor: blue[700]
		}
	}
}));

const CompareToLink = React.forwardRef((props, ref) => <RouterLink innerRef={ref} to="/compare-with" {...props} />);

const SubmitButton = ({disabled}) => {
	const classes = useStyles();

	return (
		<Button
			fullWidth
			variant="contained"
			color="primary"
			disabled={disabled}
			className={classes.submit}
			component={CompareToLink}
		>
			Submit
		</Button>
	);
};

SubmitButton.propTypes = {
	disabled: PropTypes.bool.isRequired
};

export default SubmitButton;
