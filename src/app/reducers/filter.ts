import * as filter from '../actions/filter'

export interface State {
    categoryFilter: string[];
}

export const initialState: State = {
    categoryFilter: ['music', 'dining', 'sport', 'outdoors', 'shopping', 'gamings', 'active']
}

export function reducer(state = initialState, action: filter.Actions): State {
    switch (action.type) {
        case filter.ADD_FILTER: {    //add payload to existing filters
            console.log(filter.ADD_FILTER);
            return {
                categoryFilter: [...state.categoryFilter, action.payload] //add payload to existing filters
            }
        }
        case filter.REMOVE_FILTER: {
            console.log(filter.REMOVE_FILTER);
            return {
                categoryFilter: state.categoryFilter.filter((filter) => { //return only filters that do not match payload
                    if (filter != action.payload) {
                        return filter;
                    }
                })
            }
        }
        default: return state //if none of the action types provided match, return initial state
    }

}

export const getFilters = (state: State) => state.categoryFilter;