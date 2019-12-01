import React from 'react';
import {makeStyles} from "@material-ui/core";
import BaseDataButton from "./baseDataButton";
import CompareToButton from "./compareToButton";
import Box from "@material-ui/core/Box";
import CountriesOverviewButton from "./countriesOverviewButton";

const useStyles = makeStyles(theme => ({
	footer: {
		bottom: '0px',
		position: 'absolute',
		left: '0px',
		width: '100%',
		height: '50px',
		marginBottom: '0px'
	},
	box: {
		display: 'flex',
		// this is Paper default box-shadow.
		boxShadow: '0px 3px 5px -1px rgba(0,0,0,0.2), 0px 5px 8px 0px rgba(0,0,0,0.14), 0px 1px 14px 0px rgba(0,0,0,0.12)'
	}
}));

const Footer = () => {
	const classes = useStyles();

	return (
		<div>
			<Box className={classes.footer}>
				<Box className={classes.box} justifyContent="center">
					<BaseDataButton/>
					<CompareToButton/>
					<CountriesOverviewButton />
				</Box>
			</Box>
		</div>
	);
};

/*			<Paper zDepth={5} className="footer-paper">
            <div className="footer-text">
                Made with ♥ by Vasilii Pozdeev in Gdansk 2017
            </div>
        </Paper>
    );
};
*/


export default Footer;
