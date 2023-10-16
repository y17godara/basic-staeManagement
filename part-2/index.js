import redux from "redux";
const bindActionCreators = redux.bindActionCreators;

const initialState = {
  numOfCakes: 10,
};

const ORDER_CAKE = "ORDER_CAKE";
const RESTOCK_CAKE = "RESTOCK_CAKE";

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

const reducer = (state = initialState, action) => {
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

const store = redux.createStore(reducer); // store

console.log("Initial state", store.getState());

const unsubscribe = store.subscribe(() =>
  console.log("Updated state", store.getState())
);

// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(restockCake(5));

const act = bindActionCreators({ orderCake, restockCake }, store.dispatch); // action
act.orderCake();
act.orderCake();
act.restockCake(5);

unsubscribe();