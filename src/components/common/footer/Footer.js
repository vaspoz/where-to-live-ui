import React from 'react';
import {makeStyles} from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import FooterButtons from "./FooterButtons";

const useStyles = makeStyles(theme => ({
	appBar: {
		top: 'auto',
		bottom: 0,
		backgroundColor: theme.palette.primary.main
	},
	toolbar: {
		justifyContent: 'center'
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
			</AppBar>
		</div>
	);
};
/*
Made with ♥ by Vasilii Pozdeev in Gdansk 2017
*/


export default Footer;
