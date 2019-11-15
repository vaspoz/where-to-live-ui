import React from 'react';
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import {makeStyles} from '@material-ui/core/styles';

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

const CityInput = ({data, disable, onCitySelect, isError}) => {
	const classes = useStyles();

	return (
		<div>
			<TextField
				id="outlined-basic"
				className={classes.textField}
				label="City"
				margin="normal"
				variant="outlined"
				disabled={disable}
				onBlur={(event) => {
					if (event.target.value)
						onCitySelect(event.target.value);
				}}
			/>

			{/*<AutoComplete*/}
			{/*	floatingLabelText="City"*/}
			{/*	filter={AutoComplete.caseInsensitiveFilter}*/}
			{/*	dataSource={data}*/}
			{/*	maxSearchResults={10}*/}
			{/*	disabled={disable}*/}
			{/*	onNewRequest={onCitySelect}*/}
			{/*	errorText={isError ? "Incorrect country name" : ""}*/}
			{/*	errorStyle={{*/}
			{/*		position: 'absolute',*/}
			{/*		top: 65*/}
			{/*	}}*/}
			{/*/>*/}
		</div>
	);
};

CityInput.propTypes = {
	data: PropTypes.array.isRequired,
	onCitySelect: PropTypes.func.isRequired,
	disable: PropTypes.bool.isRequired,
	isError: PropTypes.bool.isRequired
};

export default CityInput;
