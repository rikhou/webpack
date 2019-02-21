
import update from 'immutability-helper';
import { ADD_USER } from './../Actions/action';

const initialState = { userName: '' };

const updateUserName = (state, userName) => {
  return update(state, { $set: { userName } });
};

export function user(state = initialState, action) {
  switch (action.type) {
    case ADD_USER: {
      const { userName } = action.payload;
      console.log('reduce');
      return updateUserName(state, userName);
    }
    default:
      return state;
  }
}
