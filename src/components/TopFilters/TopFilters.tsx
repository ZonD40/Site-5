import React from 'react';
import classes from './TopFilters.module.sass';

const TopFilters: React.FC = () => {
	return (
		<div className={classes.filterBlocks}>
			<div>Уход за телом</div>
			<div>Уход за волосами</div>
			<div>Уход за лицом</div>
			<div>Уход за ногтями</div>
			<div>Уход за кожей рук</div>
		</div>
	);
};

export default TopFilters;