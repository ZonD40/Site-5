import { FilterAction, FilterActionTypes, FilterState } from './../../types/filter';


const initialState: FilterState = {
	brands: [],
	currentPage: 1,
	loading: false,
	error: null 
}

export function filterReducer(state = initialState, action: FilterAction): FilterState {
	switch (action.type) {
		case FilterActionTypes.CHANGE_PAGE:
			return {
				...state,
				currentPage: action.payload
			};
		case FilterActionTypes.FETCH_BRANDS:
			return {
				...state,
				loading: true
			}
		case FilterActionTypes.FETCH_BRANDS_SUCCESS:
			return {
				...state,
				brands: action.payload,
				loading: false,
			}
		case FilterActionTypes.FETCH_BRANDS_ERROR:
			return {
				...state, 
				loading: false,
				error: action.payload
			}
		default:
			return state;
	}
}