import React from 'react';
import { connect } from 'react-redux';
import Filters from '../components/Filters';
import Item from '../components/Item';
import { type Status, type User, type StatusType, type FilterCounters } from '../types';
import { setFilter } from '../actions';
import { filteredStatusesSelector, filterCountersSelector } from '../selectors/statuses';

type Props = {
  statuses: Array<Status>,
  currentUser: User,
  filter: StatusType,
  filterCounters: FilterCounters,
  setFilter: (filter: StatusType) => void,
}

function Feed(props: Props) {
  const { statuses, currentUser, filter, filterCounters, setFilter } = props;

  return (
    <div>
      <Filters
        value={filter}
        counters={filterCounters}
        onChange={setFilter}
      />

      {statuses.map(status => (
        <Item
          key={status.id}
          status={status}
          currentUser={currentUser}
        />
      ))}
    </div>
  );
}

function mapStateToProps(state) {
  const filter = state.filter.value;

  return {
    // Solves Problem #4 - Data selection on the component level
    statuses: filteredStatusesSelector(state)[filter],
    currentUser: state.user,
    filter: filter,
    filterCounters: filterCountersSelector(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    // Solves Problem #3 - Actions vs. Handlers
    setFilter: (filter: StatusType) => dispatch(setFilter(filter)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
