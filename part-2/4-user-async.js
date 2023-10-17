console.log("Path: part-2/4-user-async.js")
import redux from "redux";
import { applyMiddleware } from "redux";
import reduxLogger from "redux-logger";
const logger = reduxLogger.createLogger();
import axios from "axios";
import reduxThunk from "redux-thunk";
const thunk = reduxThunk.default;

const createStore = redux.createStore;
const combineReducers = redux.combineReducers;

const initialState = {
  loader: false,
  data: [],
  error: "",
};

const FETCH_USER_REQUEST = "FETCH_USER_REQUEST";
const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
const FETCH_USER_FAILURE = "FETCH_USER_FAILURE";


const fetchUserRequest = () => {
    return {
        type: FETCH_USER_REQUEST,
    };
};

const fetchUserSuccess = (users) => {
    return {
        type: FETCH_USER_SUCCESS,
        payload: users,
    };
}

const fetchUserFailure = (error) => {
    return {
        type: FETCH_USER_FAILURE,
        payload: error,
    };
}

const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USER_REQUEST:
        return {
            ...state,
            loader: true,
        };
        case FETCH_USER_SUCCESS:
        return {
            ...state,
            loader: false,
            data: action.payload,
            error: "",
        };
        case FETCH_USER_FAILURE:
        return {
            ...state,
            loader: false,
            data: [],
            error: action.payload,
        };
        default:
        return state;
    }
};

const fetchUsers = () => {
    return function(dispatch) {
        dispatch(fetchUserRequest());
        axios.get("https://jsonplaceholder.typicode.com/users") // success
        // axios.get("https://jsonplaceholder.typicode.com/user") // failed
        .then(response => {
            const users = response.data.map(user => user.id);
            dispatch(fetchUserSuccess(users));
        })
        .catch(error => {
            dispatch(fetchUserFailure(error.message));
        });
    }
};

const rootReducer = combineReducers({
  user: UserReducer,
});

const store = createStore(rootReducer, applyMiddleware(logger, thunk));

console.log("Initial state", store.getState());
store.dispatch(fetchUsers());