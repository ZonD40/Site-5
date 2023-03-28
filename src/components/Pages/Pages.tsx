import React, { useEffect, useState } from 'react';
import classes from './Pages.module.sass';
import arrowLeft from '../../icon/pages/arrowLeft.svg';
import arrowRight from '../../icon/pages/arrowRight.svg';
import { useTypedSelector } from '../../hooks/useTypedSeletor';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../types/AppDispatch';
import { changePage } from '../../store/action-creators/filter';


const Pages: React.FC = () => {
	const dispatch: AppDispatch = useDispatch();

	const {currentPage} = useTypedSelector(state => state.filter);
	const {totalCount} = useTypedSelector(state => state.product);

	const [page, setPage] = useState(currentPage);

	const pagesCount = Math.ceil(totalCount / 15);
	const pages = [];


	useEffect(() => { 
		dispatch(changePage(page))
	}, [page]);
	
	for (let p = 1; p <= pagesCount; p++) {
		pages.push(<div 
			key={p} 
			className={p === currentPage ? classes.active : null}
			onClick={() => setPage(p)}>
				{p}
			</div>);
	}

	return (
		<div className={classes.pages}>
			<img 
				className={classes.arrowLeft} 
				src={arrowLeft} 
				alt="arrowLeft"
				onClick={() => currentPage > 1 ? setPage(currentPage - 1) : null} />
			<div className={classes.pagesList}>
				{pages}
			</div>
			<img 
				className={classes.arrowRight} 
				src={arrowRight} 
				alt="arrowRight"
				onClick={() => currentPage < pagesCount ? setPage(currentPage + 1) : null} />
		</div>
	);
};

export default Pages;