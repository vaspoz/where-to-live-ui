import Button from "@material-ui/core/Button";
import React from "react";
import {Link as RouterLink} from "react-router-dom";
import PropTypes from "prop-types";
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	button: {
		margin: theme.spacing(1)
	},
	input: {
		display: 'none'
	}
}));

const Link1 = React.forwardRef((props, ref) => <RouterLink innerRef={ref} to="/signup" {...props} />);


const SignupButton = ({isVisible}) => {
	const classes = useStyles();

	return (
		<div style={isVisible ? {} : {display: "none"}}>
			<Button variant="contained" color="secondary" className={classes.button} component={Link1}>
				Sing Up
			</Button>
		</div>
	);
};


SignupButton.propTypes = {
	isVisible: PropTypes.bool.isRequired
};

export default SignupButton;
