import React from "react";
import {makeStyles} from '@material-ui/core/styles';
import {Link as RouterLink} from "react-router-dom";
import HomeIcon from '@material-ui/icons/Home';
import IconButton from "@material-ui/core/IconButton";
import {pink} from "@material-ui/core/colors";
import {Avatar} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	icon: {
		backgroundColor: pink[500],
		height: '30px',
		width: '30px',
	}
}));

const AboutPageLink = React.forwardRef((props, ref) => <RouterLink innerRef={ref} to="/" {...props} />);

const AboutPageButton = () => {
	const classes = useStyles();

	return (
		<div>
			<IconButton component={AboutPageLink}>
				<Avatar className={classes.icon} variant="rounded" sizes={'small'}>
					<HomeIcon fontSize={'small'}/>
				</Avatar>
			</IconButton>
		</div>
	);
};

export default AboutPageButton;
