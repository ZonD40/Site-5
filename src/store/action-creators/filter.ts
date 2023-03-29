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
			dispatch({type: FilterActionTypes.FETCH_BRANDS});

			const url = new URL('http://localhost:3001/brands');

			const response = await fetch(url);
			const brandsArray = await response.json();
			dispatch({
				type: FilterActionTypes.FETCH_BRANDS_SUCCESS,
				payload: brandsArray
			});
		} catch(e) {
			dispatch({
				type: FilterActionTypes.FETCH_BRANDS_ERROR, 
				payload: 'Произошла ошибка при загрузке данных!'
			});
		}
	}
}