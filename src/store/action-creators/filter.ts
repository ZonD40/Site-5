import { FilterAction, FilterActionTypes } from './../../types/filter';
import { Dispatch } from 'redux';

export const changePage = (page: number) => {
	return async (dispatch: Dispatch<FilterAction>) => {
		dispatch({
			type: FilterActionTypes.CHANGE_PAGE,
			payload: page
		});
	}
}

export const fetchBrands = () => {
	return async (dispatch: Dispatch<FilterAction>) => {
		try {
			dispatch({type: ProductActionTypes.FETCH_PRODUCT});

			const url = new URL('http://localhost:3001/products');
			url.searchParams.set('_page', String(page));
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