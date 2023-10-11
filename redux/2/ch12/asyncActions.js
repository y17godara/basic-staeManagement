import redux from 'redux';
import thunk from 'redux-thunk';
import reduxLogger from 'redux-logger';
import axios from 'axios';

const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;
const thunkMiddleware = thunk.default;
const logger = reduxLogger.createLogger();

// fetch users
const fetchUsers = () => {
    return function (dispatch) {
        dispatch(fetchUsersRequest());
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                // response.data is the users
                const users = response.data.map((user) => user.id);
                dispatch(fetchUsersSuccess(users));
            })
            .catch((error) => {
                // error.message is the error message
                dispatch(fetchUsersFailure(error.message));
            });
    };
};

// Initial state
const initialState = {
  loading: false,
  users: [],
  error: ''
};

// Action
const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';

// Action creator
const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST,
    };
};

const fetchUsersSuccess = (users) => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users,
    };
};

const fetchUsersFailure = (error) => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error,
    };
};

// Reducer
const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case FETCH_USERS_SUCCESS:
            return {
                loading: false,
                users: action.payload,
                error: '',
            };
        case FETCH_USERS_FAILURE:
            return {
                loading: false,
                users: [],
                error: action.payload,
            };
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    user: userReducer,
});

// Store
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
console.log("Initial state", store.getState());

store.subscribe(() => { console.log("Updated state", store.getState()) });
store.dispatch(fetchUsers());