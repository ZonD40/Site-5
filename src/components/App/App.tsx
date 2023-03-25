import React from 'react';
import Catalog from '../Catalog/Catalog';
import Header from '../Header/Header';
import classes from './App.module.sass';

const App = () => {
	return (
		<div className={classes.container}>
			<Header/>
			<Catalog/>
		</div>
	);
}

export default App;

//rsc
