import React, {PropTypes} from 'react';
import Header from './common/Header';
import Footer from './common/Footer';
import {connect} from 'react-redux';

class App extends React.Component {
	render() {
		return (
			<div>
				<header>
					<Header loading={this.props.loading}/>
				</header>
				<main>
					{this.props.children}
				</main>
				<footer>
					<Footer/>
				</footer>
			</div>
		);
	}
}

App.propTypes = {
	children: PropTypes.object.isRequired,
	loading: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
	return {
		loading: state.ajaxConnections > 0
	};
}

export default connect(mapStateToProps)(App);
