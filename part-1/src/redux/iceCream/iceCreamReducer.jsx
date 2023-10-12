import { initialState, BUY_ICECREAM } from './iceCreamType'

const cakeReducer = (state = initialState, action) => {
    switch(action.type) {
        case BUY_ICECREAM: return {
            ...state, // copy of the state object
            numOfIceCream: state.numOfIceCream - 1
        }
        default: return state
    }
}

export default cakeReducer