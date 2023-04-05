
export interface FilterState {
	brands: {
		name: string,
		count: number
	}[],
	currentPage: number,
	loading: boolean,
	error: string | null 
}

export enum FilterActionTypes {
	CHANGE_PAGE = 'CHANGE_PAGE',
	FETCH_BRANDS = 'FETCH_BRANDS',
	FETCH_BRANDS_SUCCESS = 'FETCH_BRANDS_SUCCESS',
	FETCH_BRANDS_ERROR = 'FETCH_BRANDS_ERROR'
}

interface ChangePageAction {
	type: FilterActionTypes.CHANGE_PAGE
	payload: number
}

interface FetchBrandsAction {
	type: FilterActionTypes.FETCH_BRANDS
}

interface FetchBrandsActionSuccess {
	type: FilterActionTypes.FETCH_BRANDS_SUCCESS,
	payload: {
		name: string,
		count: number
	}[]
}

interface FetchBrandsActionError {
	type: FilterActionTypes.FETCH_BRANDS_ERROR,
	payload: string
}



export type FilterAction = ChangePageAction | FetchBrandsAction | FetchBrandsActionSuccess | FetchBrandsActionError;