import React from 'react';
import PropTypes from "prop-types";
import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles({
	option: {
		fontSize: 15,
		'& > span': {
			marginRight: 10,
			fontSize: 18,
		},
	},
	textField: {
		width: '100%'
	}
});

const CountryInput = ({data, onCountrySelect, isError}) => {
	const classes = useStyles();

	return (
		<TextField
			id="outlined-basic"
			className={classes.textField}
			label="Country"
			margin="normal"
			variant="outlined"
			onBlur={(event) => {
				if (event.target.value)
					onCountrySelect(event.target.value);
			}}
		/>
	);
};
CountryInput.propTypes = {
	data: PropTypes.array.isRequired,
	onCountrySelect: PropTypes.func.isRequired,
	isError: PropTypes.bool.isRequired
};


export default CountryInput;
