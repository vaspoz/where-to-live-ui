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

const AboutPageLink = React.forwardRef((props, ref) => <RouterLink innerRef={ref} to="/" {...props} />);

const AboutPageButton = () => {
	const classes = useStyles();

	return (
		<div>
			<Button color="primary" className={classes.button} component={AboutPageLink}>
				About Page
			</Button>
		</div>
	);
};

export default AboutPageButton;
