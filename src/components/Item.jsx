import React, { Component, Fragment } from 'react'
import { type User, type Status } from '../types';

type Props = {
  currentUser: User,
  status: Status,
};


export default class Item extends Component<Props> {
  /**
  * subjectPronoun - return either the subject user name or "You" if that's you
  *
  * @returns {String} name
  */
  get subjectPronoun(): String {
    const { subject } = this.props.status;
    const { currentUser } = this.props;

    return subject.id === currentUser.id ? 'You' : subject.name;
  }

  renderStatus(status) {
    const { type, object, list } = status;

    switch (type) {
      case 'add_to_list':
        return (
          <Fragment>
            {this.subjectPronoun} added {object.name} to the list {list.name}
          </Fragment>
        );
      case 'like':
        return (
          <Fragment>
            {this.subjectPronoun} liked {object.name}&apos;s profile
          </Fragment>
        );
      case 'send_email':
        return (
          <Fragment>
            {this.subjectPronoun} sent {object.name} an email
          </Fragment>
        );
      default:
        return '';
    }
  }

  render () {
    return (
      <div>
        {this.renderStatus(this.props.status)}
      </div>
    );
  }
}
