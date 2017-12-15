import { UPDATE_PROFILE } from '../actions';

const initialState = {
  id: 1,
  name: 'Ryan Booth',
};

export default function profile (state = initialState, action) {
  switch(action.type) {
    case UPDATE_PROFILE: return { ...state, ...action.payload };
    default: return state;
  }
}
