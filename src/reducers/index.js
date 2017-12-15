import { combineReducers } from 'redux';
import user from './user';
import profile from './profile';
import statuses from './statuses';
import filter from './filter';

export default combineReducers({ user, profile, statuses, filter });
