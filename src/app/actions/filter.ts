import { Action } from '@ngrx/store';

//action type defined string values
export const ADD_FILTER = '[Filter] Added';
export const REMOVE_FILTER = '[Filter] Removed';

/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful
 * type checking in reducer functions.
 *
 * See Discriminated Unions: https://www.typescriptlang.org/docs/handbook/advanced-types.html#discriminated-unions
 */
export class AddAction implements Action {
    readonly type = ADD_FILTER;

    constructor(public payload: string) { }
}

export class RemoveAction implements Action {
    readonly type = REMOVE_FILTER;

    constructor(public payload: string) { }
}


/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type Actions
    = AddAction
    | RemoveAction;