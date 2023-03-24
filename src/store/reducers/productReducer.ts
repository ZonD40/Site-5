import { ProductState, ProductAction, ProductActionTypes } from "../../types/product";


const initialState: ProductState = {
	products: [],
	loading: false,
	error: null 
}

export function productReducer(state = initialState, action: ProductAction): ProductState {
	switch (action.type) {
		case ProductActionTypes.FETCH_PRODUCT:
			return {
				products: [],
				loading: true,
				error: null
			};
		case ProductActionTypes.FETCH_PRODUCT_SUCCESS:
			return {
				products: action.payload,
				loading: false,
				error: null
			};
		case ProductActionTypes.FETCH_PRODUCT_ERROR:
			return {
				products: [],
				loading: false,
				error: action.payload
			};
		default:
			return state;
	}
}