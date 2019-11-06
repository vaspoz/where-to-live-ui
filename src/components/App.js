import React from 'react';
import Header from './common/Header';
import Footer from './common/Footer';
import AppRoutes from "./AppRoutes";

class App extends React.Component {
	render() {
		return (
			<div>
				<header className="header header-footer-common">
					<Header/>
				</header>
				<main>
					<AppRoutes />
				</main>
				<footer className="footer header-footer-common">
					{/*<Footer/>*/}
				</footer>
			</div>
		);
	}
}

export default App;
