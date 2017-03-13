import React from 'react';
import Paper from 'material-ui/Paper';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

const styles = {
	block: {
		maxWidth: 250
	},
	radioButton: {
		marginBottom: 16
	}
};

const settingsPanel = ({onSortOrderChange}) => {
    return (
			<Paper className="left-column">
				<h3>Sort charts by</h3>
				<RadioButtonGroup name="SortOrder" defaultSelected="salary" onChange={onSortOrderChange}>
					<RadioButton
						label="Salary"
						value="salary"
						style={styles.radioButton}
					/>
					<RadioButton
						label="Expenses"
						value="expenses"
						style={styles.radioButton}
					/>
				</RadioButtonGroup>
			</Paper>
    )
};

settingsPanel.propTypes = {
	onSortOrderChange: React.PropTypes.func.isRequired
};

export default settingsPanel;
