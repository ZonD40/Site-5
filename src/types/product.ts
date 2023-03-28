export interface Product {
	pictureURL: string,
	name: string,
	sizeType: 'weight' | 'volume',
	size: number,
	id: number,
	manufacturer: string,
	brand: string,
	description: string, 
	price: number,
	careType: string
}

export interface ProductCardProps {
	product: Product
}

export interface ProductState {
	products: Product[],
	loading: boolean,
	error: null | string
}

export enum ProductActionTypes {
	FETCH_PRODUCT = 'FETCH_PRODUCT',
	FETCH_PRODUCT_SUCCESS = 'FETCH_PRODUCT_SUCCESS',
	FETCH_PRODUCT_ERROR = 'FETCH_PRODUCT_ERROR'
}

interface FetchProductAction {
	type: ProductActionTypes.FETCH_PRODUCT
}

interface FetchProductActionSuccess {
	type: ProductActionTypes.FETCH_PRODUCT_SUCCESS,
	payload: {
		product: Product[],
	}
}

interface FetchProductActionError {
	type: ProductActionTypes.FETCH_PRODUCT_ERROR,
	payload: string
}

export type ProductAction = FetchProductAction | FetchProductActionSuccess | FetchProductActionError;