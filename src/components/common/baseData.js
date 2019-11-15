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

const LoginLink = React.forwardRef((props, ref) => <RouterLink innerRef={ref} to="/base-data" {...props} />);

const BaseDataButton = () => {
	const classes = useStyles();

	return (
		<div>
			<Button color="primary" className={classes.button} component={LoginLink}>
				Base Data
			</Button>
		</div>
	);
};

export default BaseDataButton;
