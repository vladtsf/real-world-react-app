import React, { Component } from 'react';
import classNames from 'classnames';
import { type StatusType, type FilterCounters } from '../types';

import './styles/Filters.css';

type Props = {
  value: StatusType,
  counters: FilterCounters,
  onChange: (filter: StatusType) => void,
};

export default class Filters extends Component<Props> {
  updateFilterThunk(filter: StatusType) {
    return () => {
      this.props.onChange(filter);
    }
  }

  render () {
    const { value, counters } = this.props;

    return (
      <div className="Filters">
        <button
          className={classNames('Filters__button', { Filters__button_active: value === 'all' })}
          onClick={this.updateFilterThunk('all')}
        >
          all ({counters.all})
        </button>
        <button
          className={classNames('Filters__button', { Filters__button_active: value === 'outreach' })}
          onClick={this.updateFilterThunk('outreach')}
        >
          outreach ({counters.outreach})
        </button>
      </div>
    )
  }
}
