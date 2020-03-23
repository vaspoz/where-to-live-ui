import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import PropTypes from "prop-types";

const useStyles = makeStyles({
	root: {
		width: '100%',
		overflowX: 'auto'
	},
	table: {
		minWidth: 650
	}
});

const LogsElement = ({logs}) => {
	const classes = useStyles();
	return (
		<Paper className={classes.root}>
			<Table className={classes.table} aria-label="simple table">
				<TableHead>
					<TableRow>
						<TableCell>ID</TableCell>
						<TableCell align="right">Username</TableCell>
						<TableCell align="right">Action</TableCell>
						<TableCell align="right">Base country</TableCell>
						<TableCell align="right">Base city</TableCell>
						<TableCell align="right">Compared with</TableCell>
						<TableCell align="right">Comments</TableCell>
						<TableCell align="right">Timestamp</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{logs.map(logRow => (
						<TableRow key={logRow.id}>
							<TableCell>
								{logRow.id}
							</TableCell>
							<TableCell align="right">{logRow.username}</TableCell>
							<TableCell align="right">{logRow.action}</TableCell>
							<TableCell align="right">{logRow.basecountry || 'null'}</TableCell>
							<TableCell align="right">{logRow.basecity || 'null'}</TableCell>
							<TableCell align="right">{logRow.comparecountry || 'null'}</TableCell>
							<TableCell align="right">{logRow.comments}</TableCell>
							<TableCell align="right">{new Date(logRow.createdatetime).toDateString()}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</Paper>
	);
};

LogsElement.propTypes = {
	logs: PropTypes.array.isRequired
};

export default LogsElement;
