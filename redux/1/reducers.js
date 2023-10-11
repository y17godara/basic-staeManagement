import {
    INCREMENT,
    DECREMENT,
    INCREMENT_AMOUNT,
    getStatusPending,
    getStatusFulfilled,
    getStatusRejected,
    ADD_BONUS,
    REMOVE_BONUS
} from './action';

export function accountReducer(state = { amount: 1 }, action) {
    switch (action.type) {
        case getStatusPending:
            return { ...state, status: loading, loading: false}
        case getStatusFulfilled:
            return { amount: action.payload, pending: false }
        case getStatusRejected: 
            return {...state, error: action.error, pending: false}        
        case INCREMENT:
            return { amount: state.amount + 1 }
        case INCREMENT_AMOUNT:
            return { amount: state.amount + action.payload };    
        case DECREMENT:
            return { amount: state.amount - 1 };
        default:
            return state;
    }
}

export function bonusReducer(state = { points: 1 }, action) {
    switch (action.type) {
        case getStatusPending:
            return { ...state, status: loading, loading: false}
        case getStatusFulfilled:
            return { amount: action.payload, pending: false }
        case getStatusRejected: 
            return {...state, error: action.error, pending: false}        
        case ADD_BONUS:
            return { points: state.points + 1 };
        case REMOVE_BONUS:
            return { points: state.points - 1 };
        default:
            return state;
    }
}