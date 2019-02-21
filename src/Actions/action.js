export const ADD_USER = 'ADD_USER';
export const ADD_USER_ASYNC = 'ADD_USER_ASYNC';

export function addUser(userName) {
  return {
    type: ADD_USER,
    payload: { userName },
  };
}

export function addUserAsync(userName) {
  return {
    type: ADD_USER_ASYNC,
    payload: { userName },
  };
}

export function addUserThunk(userName) {
  return function dispatchAddUser(dispatch) {
    dispatch(addUser(userName));
  };
}
