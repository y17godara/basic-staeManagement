import redux from "redux";
import reduxLogger from "redux-logger";

const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger();

// Action
const BUY_LOLLYPOP = "BUY_LOLLYPOP";
const BUY_CAKE = "BUY_CAKE";

function buyLollypop() {
  return {
    type: BUY_LOLLYPOP,
    info: "Buys a lollypop",
  };
}

function buyCake() {
  return {
    type: BUY_CAKE,
    info: "Buys a cake",
  };
}

// Reducer
const initialCashState = {
  cash: 20,
};

const initialLollypopState = {
  numOfLollypops: 10,
  cash: initialCashState.cash,
};

const initialCakeState = {
  numOfCakes: 20,
  cash: initialCashState.cash,
};

const lollypopReducer = (state = initialLollypopState, action) => {
  switch (action.type) {
    case BUY_LOLLYPOP:
      if (state.cash >= 2) {
        return {
          ...state,
          numOfLollypops: state.numOfLollypops - 1,
          cash: state.cash - 2,
        };
      }
    default:
      return state;
  }
};

const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      if (state.cash >= 5) {
        return {
          ...state,
          numOfCakes: state.numOfCakes - 1,
          cash: state.cash - 5,
        };
      }
    default:
      return state;
  }
};

// Store
const rootReducer = combineReducers({
  lollypop: lollypopReducer,
  cake: cakeReducer,
});

// Store
const store = createStore(rootReducer, applyMiddleware(logger));
console.log("Initial state", store.getState());

// Subscribe
const unsubscribe = store.subscribe(() => {});

// Dispatch
store.dispatch(buyLollypop());
store.dispatch(buyLollypop());
store.dispatch(buyLollypop());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
console.log("Current State", store.getState());
unsubscribe();
