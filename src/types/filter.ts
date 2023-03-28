
export interface FilterState {
	totalCount: number
}

export enum FilterActionTypes {
	CHANGE_PAGE = 'CHANGE_PAGE',
	SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'
}

interface ChangePageAction {
	type: FilterActionTypes.CHANGE_PAGE,
}

interface SetTotalCountAction {
	type: FilterActionTypes.SET_TOTAL_COUNT,
	payload: number

}


export type FilterAction = ChangePageAction | SetTotalCountAction;