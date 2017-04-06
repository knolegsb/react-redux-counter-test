export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const SET_DIFF = 'SET_DIFF';

export function increment() {
    return {
        type: INCREMENT,
        value: []
    };
}

export function setDiff(value) {
    return {
        type: SET_DIFF,
        initialvalue: value
    };
}
