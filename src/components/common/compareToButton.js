import Button from "@material-ui/core/Button";
import React from "react";
import PropTypes from "prop-types";
import {makeStyles} from '@material-ui/core/styles';
import {Link as RouterLink} from "react-router-dom";

const useStyles = makeStyles(theme => ({
	button: {
		margin: theme.spacing(1)
	}
}));

const LoginLink = React.forwardRef((props, ref) => <RouterLink innerRef={ref} to="/compare-with" {...props} />);

const CompareToButton = () => {
	const classes = useStyles();

	return (
		<div>
			<Button color="primary" className={classes.button} component={LoginLink}>
				Compare To
			</Button>
		</div>
	);
};

export default CompareToButton;
