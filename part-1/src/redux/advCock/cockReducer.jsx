import { initialState, BUY_COCK } from './cockType'

const cakeReducer = (state = initialState, action) => {
    switch(action.type) {
        case BUY_COCK: return {
            ...state, // copy of the state object
            numOfIceCream: state.numOfIceCream - 1
        }
        default: return state
    }
}

export default cakeReducer