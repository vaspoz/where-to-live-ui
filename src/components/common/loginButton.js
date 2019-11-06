import Button from "@material-ui/core/Button";
import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from '@material-ui/core/styles';
import {Link as RouterLink} from "react-router-dom";

const useStyles = makeStyles(theme => ({
	button: {
		margin: theme.spacing(1)
	},
	input: {
		display: 'none'
	}
}));

const Link1 = React.forwardRef((props, ref) => <RouterLink innerRef={ref} to="/login" {...props} />);

const LoginButton = ({isVisible}) => {
	const classes = useStyles();

	return (
		<div style={isVisible ? {} : {display: "none"}}>
			<Button color="primary" className={classes.button} component={Link1}>
				Log In
			</Button>
		</div>
	);
};

LoginButton.propTypes = {
	isVisible: PropTypes.bool.isRequired
};

export default LoginButton;
