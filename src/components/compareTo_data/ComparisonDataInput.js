import React from 'react';
import {connect} from 'react-redux';
import CountryTable from './CountryTable';
import SelectedCountryList from './SelectedCountries';

const styles = {
		container: {
			textAlign: 'center',
			paddingTop: 100,
			top: 50
		},
		leftColumn: {
			textAlign: 'center',
			border: 'solid black',
			width: '50%',
			height: '200px',
			float: 'left'
		},
		rightColumn: {
			border: 'solid black',
			marginLeft: '50%',
			height: '200px'
		},
		innerLeft: {
			border: 'solid red',
			width: '50%',
			height: '200px',
			float: 'left'
		},
		innerRight: {
			border: 'solid red',
			marginLeft: '50%',
			height: '200px'
		},
		table: {
			width: 200,
			margin: 'auto'
		}
	}
	;

class ComparisonDataInput extends React.Component {
	constructor(props, context) {
		super(props, context);
	}

	render() {
		return (
			<div>
				<div style={styles.leftColumn}>
					<h1>Select countries of your dreams</h1>
					<div style={styles.innerLeft}>
						<CountryTable countryList={this.props.countryList}/>
					</div>
					<div style={styles.innerRight}>
						<SelectedCountryList/>
					</div>
				</div>
				<div style={styles.rightColumn}>
				</div>
			</div>
		);
	}
}

ComparisonDataInput.propTypes = {
	countryList: React.PropTypes.array.isRequired
};

function mapStateToProps(state) {
	return {
		countryList: state.countryList
	};
}

export default connect(mapStateToProps)(ComparisonDataInput);
