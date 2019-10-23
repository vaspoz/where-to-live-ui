import React from 'react';
import RefreshIndicator from "material-ui/RefreshIndicator";
import StatsNumber from './statsNumber';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
	refresh: {
		display: 'inline-block',
		position: 'relative'
	},
	button: {
		marginTop: "25px"
	}
};

const overviewBody = ({noOfCities, avgProfit}) => {
	return (
		<div>
			{noOfCities > 0 ?
				<div>
					<StatsNumber description="No of cities" number={noOfCities}/>
					<StatsNumber description="Median Profit" number={avgProfit}/>
					<RaisedButton
						label="Details"
						style={style.button}
						disabled={true}
						/>
				</div> :
				<RefreshIndicator
					left={0}
					top={130}
					size={40}
					style={style.refresh}
					status="loading"
				/>}
		</div>
	)
};

overviewBody.propTypes = {
	noOfCities: React.PropTypes.number,
	avgProfit: React.PropTypes.number
};

export default overviewBody;
