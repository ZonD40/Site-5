import { Dispatch } from 'redux';
import { ProductAction, ProductActionTypes } from './../../types/product';

export const fetchProduct = () => {
	return async (dispatch: Dispatch<ProductAction>) => {
		try {
			dispatch({type: ProductActionTypes.FETCH_PRODUCT});
			const response = await fetch('http://localhost:3001/products');
			const productArray = await response.json();
			dispatch({
				type: ProductActionTypes.FETCH_PRODUCT_SUCCESS,
				payload: productArray
			});
			console.log(productArray);
		} catch(e) {
			dispatch({
				type: ProductActionTypes.FETCH_PRODUCT_ERROR, 
				payload: 'Произошла ошибка при загрузке данных!'
			});
		}
	}
}