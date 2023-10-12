import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import iceCreamReducer from "./iceCream/iceCreamReducer";

const reducers = {
  cake: cakeReducer,
  cream: iceCreamReducer,
};

const rootReducer = combineReducers(reducers);

export default rootReducer;