import update from 'immutability-helper';
import { ADD_STATUS } from '../actions';

const initialState = {
  items: [],
};

export default function profile (state = initialState, action) {
  switch (action.type) {
    case ADD_STATUS:
      return update(state, {
        items: {
          $unshift: [
            { ...action.payload, id: state.items.length },
          ],
        },
      });
    default:
      return state;
  }
}
