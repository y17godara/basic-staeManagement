import { initialState, BUY_CAKE } from './cakeType'

const cakeReducer = (state = initialState, action) => {
    switch(action.type) {
        case BUY_CAKE: return {
            ...state, // copy of the state object
            numOfCakes: state.numOfCakes - 1
        }
        default: return state
    }
}

export default cakeReducer