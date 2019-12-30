import React from 'react';
import {makeStyles} from "@material-ui/core";
import BaseDataButton from "./baseDataButton";
import CompareToButton from "./compareToButton";
import Box from "@material-ui/core/Box";
import CountriesOverviewButton from "./countriesOverviewButton";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const useStyles = makeStyles(theme => ({
	appBar: {
		top: 'auto',
		bottom: 0
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
			<AppBar position="fixed" color="default" className={classes.appBar}>
				<Toolbar className={classes.toolbar}>
					<BaseDataButton/>
					<CompareToButton/>
					<CountriesOverviewButton/>
				</Toolbar>
			</AppBar>
		</div>
	);
};
/*
Made with ♥ by Vasilii Pozdeev in Gdansk 2017
*/


export default Footer;
