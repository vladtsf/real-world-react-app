import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withKnobs, text, boolean, number, object, select } from '@storybook/addon-knobs';

import { type FilterCounters } from '../types';
import Item from '../components/Item';
import Popup from '../components/Popup';
import Filters from '../components/Filters';

const ryan = 'https://scontent-sjc2-1.xx.fbcdn.net/v/t1.0-1/p320x320/16142203_10158187254235192_8220544394115960773_n.jpg?oh=821f85a6ff3e2d08646f0d1dd59281ef&oe=5AC94E6A';
const vlad = 'https://scontent-sjc2-1.xx.fbcdn.net/v/t1.0-9/18922087_10211353622184040_2905151091518175606_n.jpg?oh=547ba25a6581046121326b37a7f04738&oe=5A8C1ABE';

storiesOf('ActivityFeed', module)
  .addDecorator(withKnobs)
  .add('<Item />', () => {
    const profile = { id: 1, name: 'Ryan', company: 'Entelo' };
    const user = { id: 1, name: 'Ryan' };
    const list = { id: 1, name: 'React Devs' };
    const status = { id: 1, type: 'add_to_list', subject: user, object: profile, list };

    return (
      <Item
        currentUser={object('currentUser', user)}
        status={object('status', status)}
      />
    );
  })
  .add('<Popup />', () => {
    return (
      <Popup title={text('title', 'Ryan\'s Activity Feed')}>{text('children', 'Hello there!')}</Popup>
    );
  })
  .add('<Filters />', () => {
    const counters: FilterCounters = {
      all: 5,
      outreach: 1,
    };

    return (
      <Filters
        value={select('value', ['all', 'outreach'], 'all')}
        counters={object('counters', counters)}
        onChange={action('onChange')}
      />
    );
  });
