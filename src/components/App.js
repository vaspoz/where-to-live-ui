import React from 'react';
import Header from './common/Header';
import Footer from './common/Footer';
import AppRoutes from "./AppRoutes";

const App = () => {
	return (
		<div>
			<Header/>
			<AppRoutes/>
			<Footer/>
		</div>
	)
};

export default App;



