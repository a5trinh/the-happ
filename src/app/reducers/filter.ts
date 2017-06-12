import * as filter from '../actions/filter';
import { Category } from '../models/category';

export interface State {
    categoryFilter: Category[];
}

export const initialState: State = {
    categoryFilter: [{
        name: 'music',
        isActive: true
    }, {
        name: 'dining',
        isActive: true
    }, {
        name: 'sport',
        isActive: true
    }, {
        name: 'outdoors',
        isActive: true
    }, {
        name: 'shopping',
        isActive: true
    }, {
        name: 'gaming',
        isActive: true
    }, {
        name: 'active',
        isActive: true
    }]
}

export function reducer(state = initialState, action: filter.Actions): State {
    switch (action.type) {
        case filter.ACTIVATE_FILTER: {    //add payload to existing filters
            console.log(filter.ACTIVATE_FILTER);
            let index = state.categoryFilter.map((category)=>category.name).indexOf(action.payload.name)//finds the index of the toggled filted
            let toggledFilter = Object.assign({}, action.payload, { isActive: true })//creates a new Category object representing the toggled index
            return {
                categoryFilter: [...state.categoryFilter.slice(0, index), toggledFilter, ...state.categoryFilter.slice(index + 1)] //add payload to existing filters
            }
        }
        case filter.DISABLE_FILTER: {
            console.log(filter.DISABLE_FILTER);
            let index = state.categoryFilter.map((category)=>category.name).indexOf(action.payload.name)//finds the index of the toggled filted
            let toggledFilter = Object.assign({}, action.payload, { isActive: false })//creates a new Category object representing the toggled index
            console.log(action.payload);
            console.log(index);
            console.log( [...state.categoryFilter.slice(0, index), toggledFilter, ...state.categoryFilter.slice(index + 1)]);
            return {
                categoryFilter: [...state.categoryFilter.slice(0, index), toggledFilter, ...state.categoryFilter.slice(index + 1)] //add payload to existing filters
            }
        }
        default: return state //if none of the action types provided match, return initial state
    }

}

export const getFilters = (state: State) => state.categoryFilter;