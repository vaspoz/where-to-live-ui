import React, {PropTypes} from 'react';
import Header from './common/Header';
import Footer from './common/Footer';
import {connect} from 'react-redux';

class App extends React.Component {
	render() {
		return (
			<div>
				<header className="header header-footer-common">
					<Header/>
				</header>
				<main>
					{this.props.children}
				</main>
				<footer className="footer header-footer-common">
					<Footer/>
				</footer>
			</div>
		);
	}
}

App.propTypes = {
	children: PropTypes.object.isRequired
};

function mapStateToProps(state) {
	return {
	};
}

export default connect(mapStateToProps)(App);
