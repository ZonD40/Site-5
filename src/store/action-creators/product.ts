import { Dispatch } from 'redux';
import { ProductAction, ProductActionTypes } from './../../types/product';

export const fetchProduct = () => {
	return async (dispatch: Dispatch<ProductAction>) => {
		try {
			dispatch({type: ProductActionTypes.FETCH_PRODUCT});

			const url = new URL('http://localhost:3001/products');
			url.searchParams.set('_page', '1');
			url.searchParams.set('_limit', '15');

			const response = await fetch(url);
			const XTotalCount = Number(response.headers.get('X-Total-Count'));
			const productArray = await response.json();
			dispatch({
				type: ProductActionTypes.FETCH_PRODUCT_SUCCESS,
				payload: {
					product: productArray,
					totalCount: XTotalCount
				}
			});
		} catch(e) {
			dispatch({
				type: ProductActionTypes.FETCH_PRODUCT_ERROR, 
				payload: 'Произошла ошибка при загрузке данных!'
			});
		}
	}
}