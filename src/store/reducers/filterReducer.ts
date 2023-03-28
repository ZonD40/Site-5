import { FilterAction, FilterActionTypes, FilterState } from "../../types/filter";

const initialState: FilterState = {
	totalCount: 0
}

export function filterReducer(state = initialState, action: FilterAction): FilterState {
	switch (action.type) {
		case FilterActionTypes.CHANGE_PAGE:
			return {
				totalCount: 0,
			};
		default:
			return state;
	}
}