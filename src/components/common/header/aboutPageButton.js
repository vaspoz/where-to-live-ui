import React from "react";
import {makeStyles} from '@material-ui/core/styles';
import {Link as RouterLink} from "react-router-dom";
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles(theme => ({
	button: {
		margin: theme.spacing(1)
	},
	icon: {
		backgroundColor: theme.palette.primary.main
	}
}));

const AboutPageLink = React.forwardRef((props, ref) => <RouterLink innerRef={ref} to="/" {...props} />);

const AboutPageButton = () => {
	return (
		<div>
			<IconButton onClick={()=>{}} component={AboutPageLink}>
				<FlightTakeoffIcon/>
			</IconButton>
		</div>
	);
};

export default AboutPageButton;
