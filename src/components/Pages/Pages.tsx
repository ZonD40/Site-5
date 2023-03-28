import React from 'react';
import classes from './Pages.module.sass';
import arrowLeft from '../../icon/pages/arrowLeft.svg';
import arrowRight from '../../icon/pages/arrowRight.svg';
import { useTypedSelector } from '../../hooks/useTypedSeletor';


const Pages: React.FC = () => {
	const {totalCount} = useTypedSelector(state => state.product);
	const pagesCount = Math.ceil(totalCount / 25);
	const pages = [];
	
	for (let p = 1; p <= pagesCount; p++) {
		pages.push(<div>p</div>);
	}

	return (
		<div className={classes.pages}>
			<img className={classes.arrowLeft} src={arrowLeft} alt="arrowLeft" />
			<div className={classes.pagesList}>
				<div className={classes.active}>1</div>
				<div>2</div>
				<div>3</div>
				<div>4</div>
				<div>5</div>
				{for (let i = 1; i <= pages; i++) {
					<div>
				}}
			</div>
			<img className={classes.arrowRight} src={arrowRight} alt="arrowRight" />
		</div>
	);
};

export default Pages;