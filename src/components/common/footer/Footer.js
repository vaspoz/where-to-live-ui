import React from 'react';
import {makeStyles} from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import FooterButtons from "./FooterButtons";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from '@material-ui/icons/Favorite';
const useStyles = makeStyles(theme => ({
	appBar: {
		top: 'auto',
		bottom: 0,
		backgroundColor: theme.palette.primary.main
	},
	toolbar: {
		justifyContent: 'center'
	},
	text: {
		position: 'absolute',
		right: 20,
		top: 20
	}
}));

const Footer = () => {
	const classes = useStyles();

	return (
		<div>
			<CssBaseline/>
			<AppBar position="fixed" className={classes.appBar}>
				<Toolbar className={classes.toolbar}>
					<FooterButtons/>
				</Toolbar>
				<Box className={classes.text}>
					<Typography variant="subtitle2">
						Developed with <FavoriteIcon style={{height: '15px'}} fontSize="small" color="secondary"/> by <Typography color="textSecondary" variant="inherit">Basil</Typography> in Gdansk and Breda
					</Typography>
				</Box>
			</AppBar>
		</div>
	);
};
/*
Made with ♥ by Vasilii Pozdeev in Gdansk 2017
*/


export default Footer;
