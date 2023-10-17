import redux from "redux";
const bindActionCreators = redux.bindActionCreators;
const combineReducers = redux.combineReducers;

const initialState = {
  numOfCakes: 10,
  numOfIceCreams: 20,
};

const ORDER_CAKE = "ORDER_CAKE";
const RESTOCK_CAKE = "RESTOCK_CAKE";
const ORDER_ICECREAM = "ORDER_ICECREAM";
const RESTOCK_ICECREAM = "RESTOCK_ICECREAM";

function orderCake() {
  return {
    type: ORDER_CAKE,
    info: "Ordering cake",
    quantity: 1,
  };
}

function restockCake(qty) {
  return {
    type: RESTOCK_CAKE,
    info: "Restocking cake",
    quantity: qty,
  }
}

function orderIceCream() {
  return {
    type: ORDER_ICECREAM,
    info: "Ordering ice cream",
    quantity: 1,
  };
}

function restockIceCream(qty) {
  return {
    type: RESTOCK_ICECREAM,
    info: "Restocking ice cream",
    quantity: qty,
  }
}

const cakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ORDER_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - action.quantity,
      };
    case RESTOCK_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes + action.quantity,
      }
    default:
      return state;
  }
};

const iceCreamReducer = (state = initialState, action) => {
  switch (action.type) {
    case ORDER_ICECREAM:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - action.quantity,
      };
    case RESTOCK_ICECREAM:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams + action.quantity,
      }
    default:
      return state;  
  }
};

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
}); // reducer

const store = redux.createStore(rootReducer); // store

console.log("Initial state", store.getState());

const unsubscribe = store.subscribe(() =>
  console.log("Updated state", store.getState())
);

const act = bindActionCreators({ orderCake, restockCake, orderIceCream, restockIceCream }, store.dispatch); // action
act.orderCake();
act.orderCake();
act.orderIceCream();
act.restockCake(5);
act.restockIceCream(10);

unsubscribe();