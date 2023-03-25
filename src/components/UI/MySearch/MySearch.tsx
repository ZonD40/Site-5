import React from 'react';
import classes from './MySearch.module.sass';
import search from '../../../icon/header/search.svg';

const MySearch: React.FC = () => {
	return (
		<div className={classes.search}>
			<input type="text" placeholder='Поиск...'/>
			<div>
				<img src={search} alt="search" />
			</div>
		</div>
	);
};

export default MySearch;