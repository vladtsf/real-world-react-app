import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import './styles/Popup.css';

const root = document.body;

type Props = {
  title: String,
}

export default class Popup extends Component<Props> {
  target = document.createElement('div')

  componentDidMount() {
    root.appendChild(this.target);
  }

  componentWillUnmount() {
    root.removeChild(this.target);
  }

  render () {
    const { children, title } = this.props;

    return createPortal((
      <div className="Popup">
        <h2 className="Popup__title">{title}</h2>
        <hr />
        {children}
      </div>
    ), this.target);
  }
}
