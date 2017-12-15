import { type StatusType, type Profile, type Status } from './types';

export const UPDATE_PROFILE = 'UPDATE_PROFILE';
export const SET_FILTER = 'SET_FILTER';
export const ADD_STATUS = 'ADD_STATUS';

export function updateProfile(profile: Profile) {
  return {
    type: UPDATE_PROFILE,
    payload: profile,
  };
}

export function setFilter(filter: StatusType) {
  return {
    type: SET_FILTER,
    payload: filter,
  };
}

export function addStatus(status: Status) {
  return {
    type: ADD_STATUS,
    payload: status,
  };
}
