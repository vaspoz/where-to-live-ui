import React from 'react';
import Typography from '@material-ui/core/Typography';
import {Paper} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";

const LabelElement = () => {
	return (
		<Typography>
			<Typography component="h1" variant="h5" align="center">
				Select Countries
			</Typography>
			<Typography variant="caption" color="textSecondary">
				Countries to make a comparison
			</Typography>
		</Typography>
	);
};

export default LabelElement;
