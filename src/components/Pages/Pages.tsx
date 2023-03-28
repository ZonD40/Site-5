import React from 'react';
import classes from './Pages.module.sass';
import arrowLeft from '../../icon/pages/arrowLeft.svg';
import arrowRight from '../../icon/pages/arrowRight.svg';
import { useTypedSelector } from '../../hooks/useTypedSeletor';


const Pages: React.FC = () => {
	const {totalCount} = useTypedSelector(state => state.filter);

	return (
		<div className={classes.pages}>
			<img className={classes.arrowLeft} src={arrowLeft} alt="arrowLeft" />
			<div className={classes.pagesList}>
				<div className={classes.active}>1</div>
				<div>2</div>
				<div>3</div>
				<div>4</div>
				<div>5</div>
			</div>
			<img className={classes.arrowRight} src={arrowRight} alt="arrowRight" />
		</div>
	);
};

export default Pages;