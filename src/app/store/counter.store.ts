import { ActionReducer, Action } from '@ngrx/store';

export const INCREMENT = 'INCREMENT';
export const INCREMENT_TWICE = 'INCREMENT_TWICE';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';

/**
 * Provides the correct initial state 
 * for the node and browser versions.
 */
export function initialState(): number {
    if (typeof window != 'undefined' && typeof window['TRANSFER_STATE'] != 'undefined') {
        return window['TRANSFER_STATE'].state.counter;
    } else {
        return 0;
    }
}

export function counterReducer(state: number = initialState(), action: Action): number {
    switch (action.type) {
        case INCREMENT:
            return state + 1;

        case INCREMENT_TWICE:
            return state + 2;

        case DECREMENT:
            return state - 1;

        case RESET:
            return 0;

        default:
            return state;
    }
}