import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypedSeletor';
import { fetchProduct } from '../../store/action-creators/product';
import { AppDispatch } from '../../types/AppDispatch';


const Catalog: React.FC = () => {
	const {products, error, loading} = useTypedSelector(state => state.product);
	const dispatch: AppDispatch = useDispatch();
	
	useEffect(() => {
		dispatch(fetchProduct());
	});
	

	if (loading) {
		return <h1>Идет Загрузка</h1>
	}
	if (error) {
		return <h1>Произошла ошибка</h1>
	}

	return (
		<div>
			{products.map((product) => {
				return	<div>{product.name}</div>
			})}
		</div>
	);
};

export default Catalog;