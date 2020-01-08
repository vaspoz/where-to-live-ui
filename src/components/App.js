import React from 'react';
import Header from './common/header/Header';
import Footer from './common/footer/Footer';
import AppRoutes from "./AppRoutes";

const App = () => {
	return (
		<div>
			<Header/>
			<AppRoutes/>
			<Footer/>
		</div>
	);
};

export default App;



