import { SET_FILTER } from '../actions';

const initialState = {
  value: 'all',
};

export default function filter (state = initialState, action) {
  switch(action.type) {
    case SET_FILTER: return { ...state, value: action.payload };
    default: return state;
  }
}
