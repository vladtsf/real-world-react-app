import React, { Component } from 'react';
import { connect } from 'react-redux';
import Feed from './Feed';
import Popup from '../components/Popup';
import { vladsUser, ryansProfile, lists } from '../constants';
import { type Profile, type Status, type StatusType } from '../types';
import { updateProfile, addStatus } from '../actions';

type Props = {
  currentProfile: Profile,
  updateProfile: (profile: Profile) => void,
  addStatus: (Status: Status) => void,
};

type State = {
  statusType: StatusType,
};

class Main extends Component<Props, State> {
  state = { statusType: 'add_to_list' }

  constructor(props) {
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleStatusAdd = this.handleStatusAdd.bind(this);
    this.handleStatusTypeChange = this.handleStatusTypeChange.bind(this);
    this.actionTypeSelect = null;
    this.listSelect = null;
  }

  handleNameChange(e) {
    this.props.updateProfile({ name: e.target.value });
  }

  handleStatusTypeChange(e) {
    this.setState({ statusType: this.actionTypeSelect.value });
  }

  handleStatusAdd(e) {
    e.preventDefault();

    const status: Status = {
      id: null,
      type: this.actionTypeSelect.value,
      subject: vladsUser,
      object: ryansProfile,
      list: this.listSelect && lists.find(list => list.id === Number(this.listSelect.value)),
    };

    this.props.addStatus(status);
  }

  renderAddForm() {
    const { statusType } = this.state;

    return (
      <form onSubmit={this.handleStatusAdd}>
        <label>
          ActionType:
          <select ref={ref => this.actionTypeSelect = ref} onChange={this.handleStatusTypeChange}>
            <option value="add_to_list">Add to List</option>
            <option value="like">Like</option>
            <option value="send_email">Send Email</option>
          </select>
        </label>

        {statusType === 'add_to_list' && (
          <label>
            List:
            <select ref={ref => this.listSelect = ref}>
              {lists.map(list => (
                <option key={list.id} value={list.id}>{list.name}</option>
              ))}
            </select>
          </label>
        )}

        <button>Add</button>
      </form>
    );
  }

  renderNameInput() {
    const { currentProfile } = this.props;

    return (
      <div>
        <label>Name:</label>
        <input value={currentProfile.name} onChange={this.handleNameChange} />
      </div>
    );
  }

  render() {
    const { currentProfile } = this.props;

    return (
      <div>
        <Popup title={`${currentProfile.name}'s Activity Feed`}>
          <Feed />
        </Popup>

        {this.renderAddForm()}
        {this.renderNameInput()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentProfile: state.profile,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateProfile: (profile: Profile) => dispatch(updateProfile(profile)),
    addStatus: (status: Status) => dispatch(addStatus(status)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
