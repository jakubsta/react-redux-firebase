// @flow

import React, { Component, PropTypes } from 'react';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export default class EmailPassword extends Component {

  static propTypes = {
    label: PropTypes.string.isRequired,
    onAction: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };

    this.onClick = this.onClick.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.updateEmail = this.updateEmail.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
  }

  onClick() {
    this.props.onAction(this.state.email, this.state.password);
  }

  onKeyDown(e) {
    if (e.keyCode === 13) {
      this.onClick();
    }
  }

  updateEmail(e) {
    this.setState({ email: e.target.value });
  }

  updatePassword(e) {
    this.setState({ password: e.target.value });
  }

  render() {
    return (
      <div>
        <TextField
          type="text"
          hintText="Email"
          value={this.state.email}
          onChange={this.updateEmail}
        />
        <TextField
          type="password"
          hintText="Password"
          value={this.state.password}
          onChange={this.updatePassword}
          onKeyDown={this.onKeyDown}
        />
        <RaisedButton
          primary
          label={this.props.label}
          onClick={this.onClick}
        />
      </div>
    );
  }
}
