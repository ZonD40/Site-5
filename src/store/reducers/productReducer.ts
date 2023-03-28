import { ProductState, ProductAction, ProductActionTypes } from "../../types/product";


const initialState: ProductState = {
	totalCount: 0,
	products: [],
	loading: false,
	error: null 
}

export function productReducer(state = initialState, action: ProductAction): ProductState {
	switch (action.type) {
		case ProductActionTypes.FETCH_PRODUCT:
			return {
				totalCount: 0,
				products: [],
				loading: true,
				error: null
			};
		case ProductActionTypes.FETCH_PRODUCT_SUCCESS:
			return {
				totalCount: action.payload.totalCount,
				products: action.payload.product,
				loading: false,
				error: null
			};
		case ProductActionTypes.FETCH_PRODUCT_ERROR:
			return {
				totalCount: 0,
				products: [],
				loading: false,
				error: action.payload
			};
		default:
			return state;
	}
}