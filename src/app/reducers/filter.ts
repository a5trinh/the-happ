import * as filter from '../actions/filter'

export interface State {
    categoryFilter: string[];
}

export const initialState: State = {
    categoryFilter: ['music']
}

export function reducer(state = initialState, action: filter.Actions): State {
    
    //add switch statements to handle actions
    return state
}

export const getFilters = (state: State) => state.categoryFilter;