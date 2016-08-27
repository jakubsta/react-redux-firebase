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
  }

  onClick() {
    this.props.onAction(this.state.email, this.state.password);
  }

  render() {
    return (
      <div>
        <TextField
          type="text"
          hintText="Email"
          value={this.state.email}
          onChange={(e) => this.setState({ email: e.target.value })}
        />
        <TextField
          type="password"
          hintText="Password"
          value={this.state.password}
          onChange={(e) => this.setState({ password: e.target.value })}
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
