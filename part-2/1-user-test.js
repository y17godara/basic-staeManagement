import redux from "redux";
const createStore = redux.createStore;
const bindActionCreators = redux.bindActionCreators;
const combineReducers = redux.combineReducers;


const initialState = {
  name: "John",
  address: {
    street: "123 Main St",
    city: "Anywhere",
    state: "CA",
    zip: "94801",
  },
};

const STREET_UPDATE = "STREET_UPDATE";
const updateStreet = (street) => {
  return {
    type: STREET_UPDATE,
    payload: street,
  };
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case STREET_UPDATE:
      return {
        ...state,
        address: {
          ...state.address,
          street: action.payload,
        },
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  user: UserReducer,
});

const store = createStore(rootReducer);
console.log("Initial state", store.getState());

const action = bindActionCreators(updateStreet, store.dispatch);

const unsubscribe = store.subscribe(() => {
  console.log("Updated state", store.getState());
});

action("456 Main St");
unsubscribe();
