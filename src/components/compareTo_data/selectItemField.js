import React from 'react';
import PropTypes from "prop-types";
import {makeStyles, TextField} from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete/Autocomplete";

const useStyles = makeStyles(theme => ({
	autocomplete: {
		margin: theme.spacing(1,0),
		display: "inline-block",
		width: "200px"
	}
}));

const SelectItemField = ({countryList, onSelect, inputDisabled, isError, value}) => {
	const classes = useStyles();
	return (
		<Autocomplete
			options={countryList}
			getOptionLabel={country => country}
			disabled={inputDisabled}
			value={value}
			className={classes.autocomplete}
			onChange={onSelect}
			renderInput={params => (
				<TextField {...params} label="Country" fullWidth/>
			)}
		/>

	)
};

SelectItemField.propTypes = {
	onSelect: PropTypes.func.isRequired,
	countryList: PropTypes.array.isRequired,
	inputDisabled: PropTypes.bool.isRequired,
	isError: PropTypes.bool.isRequired,
	value: PropTypes.string
};

export default SelectItemField;
/*
<AutoComplete
	floatingLabelText="Select Country"
	filter={AutoComplete.caseInsensitiveFilter}
	menuStyle={{maxHeight: 300}}
	dataSource={countryList}
	onNewRequest={onSelect}
	searchText={value}
	disabled={inputDisabled}
	errorText={isError ? "Incorrect country name" : ""}
	errorStyle={{
		position: 'absolute',
		top: 65
	}}
/>
		*/
