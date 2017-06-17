import { Action } from '@ngrx/store';
import { Category } from '../models/category';
//action type defined string values
export const ACTIVATE_FILTER = '[Filter] Activated';
export const DISABLE_FILTER = '[Filter] Disabled';
export const RESET_FILTER = '[Filter] Reset'

/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful
 * type checking in reducer functions.
 *
 * See Discriminated Unions: https://www.typescriptlang.org/docs/handbook/advanced-types.html#discriminated-unions
 */
export class ActivateAction implements Action {
    readonly type = ACTIVATE_FILTER;

    constructor(public payload: Category) { }
}

export class DisableAction implements Action {
    readonly type = DISABLE_FILTER;

    constructor(public payload: Category) { }
}

export class ResetAction implements Action {
    readonly type = RESET_FILTER;
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type Actions
    = ActivateAction
    | DisableAction
    | ResetAction;