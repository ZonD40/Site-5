import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypedSeletor';
import { fetchProduct } from '../../store/action-creators/product';
import { AppDispatch } from '../../types/AppDispatch';
import Filters from '../Filters/Filters';
import ProductCard from '../ProductCard/ProductCard';
import classes from './Catalog.module.sass';
import loadingRing from '../../icon/loading/loading.svg';


const Catalog: React.FC = () => {
	const {products, error, loading} = useTypedSelector(state => state.product);
	const dispatch: AppDispatch = useDispatch();
	
	useEffect(() => { 
		dispatch(fetchProduct());
	}, []);
	

	if (loading) {
		console.log(loadingRing)
		return <div>
			 {loadingRing}
		</div>
	}
	if (error) {
		return <h1>Произошла ошибка</h1>
	}

	return (
		<div className={classes.catalog}>
			<div className={classes.breadCrumbs}>
				<span>Главная</span>
				<span>Косметика и гигиена</span>
			</div>
			<div className={classes.title}>
				Каталог
				<div className={classes.sort}>
					Сортировка:  
					<select name="sort" id="sort">
						<option value="nameDown">Название по убыванию</option>
						<option value="nameUp">Название по возрастанию</option>
						<option value="priceDown">Цена по убыванию</option>
						<option value="priceUP">Цена по возрастанию</option>
					</select>
				</div>
			</div>
			<div className={classes.filterBlocks}>
				<div>Уход за телом</div>
				<div>Уход за волосами</div>
				<div>Уход за лицом</div>
				<div>Уход за ногтями</div>
				<div>Уход за кожей рук</div>
			</div>
			<div className={classes.wrapper}>
			<Filters/>
				<div className={classes.products}>
					{products.map((product) => <ProductCard product={product} /> )}
				</div>
			</div>

			
		</div>
	);
};

export default Catalog;