import { createSelector } from 'reselect'

const statusesSelector = state => state.statuses.items
const filterSelector = state => state.filter.value

export const filteredStatusesSelector = createSelector(
  statusesSelector,
  filterSelector,
  (statuses, filter) => {
    return {
      all: statuses,
      outreach: statuses.filter(status => status.type === 'send_email'),
    };
  }
);

export const filterCountersSelector = createSelector(
  filteredStatusesSelector,
  (filtered) => {
    return {
      all: filtered.all.length,
      outreach: filtered.outreach.length,
    };
  }
);
