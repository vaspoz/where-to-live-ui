import Button from "@material-ui/core/Button";
import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from '@material-ui/core/styles';
import {Link as RouterLink} from "react-router-dom";
import {Typography} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	button: {
		margin: theme.spacing(1)
	},
	text: {
		color: theme.palette.primary.contrastText
	}
}));

const AdminPortalLink = React.forwardRef((props, ref) => <RouterLink innerRef={ref} to="/admin-portal" {...props} />);

const AdminButton = ({isVisible}) => {
	const classes = useStyles();

	return (
		<div>
			{isVisible && <Button className={classes.button} component={AdminPortalLink}>
				<Typography variant="button" className={classes.text}>
				Admin Portal
				</Typography>
			</Button>}
		</div>
	);
};

AdminButton.propTypes = {
	isVisible: PropTypes.bool.isRequired
};

export default AdminButton;
