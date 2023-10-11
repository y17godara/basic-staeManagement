export const INCREMENT = 'account/increment';
export const DECREMENT = 'account/decrement';
export const INCREMENT_AMOUNT = 'account/incrementByAmount';
export const getStatusPending = 'account/getUser/Pending';
export const getStatusFulfilled = 'account/getUser/FullFilled';
export const getStatusRejected = 'account/getUser/Rejected';
export const ADD_BONUS = 'bonus/increment';
export const REMOVE_BONUS = 'bonus/decrement';

export function getUserAccount(id) {
    return async (dispatch, getState) => {
        try {
            dispatch(getAccUserPending());
            const { data } = await axios.get(`/api/users/${id}`);
            dispatch(getAccUserFullFilled(data.amount));
        }
        catch (err) {
            dispatch(getAccUserRejected());
        }
    }
}
