// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { editPost } from '../actions/posts';
import { signUp, signIn } from '../actions/user';

import TableOptions from './TableOptions';
import PostTable from './PostTable';
import PostAdder from './PostAdder';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      newTitle: '',
      email: '',
      password: '',
    };
  }

  render() {
    return (<div>
      <input
        type="text"
        placeholder="Email"
        value={this.state.email}
        onChange={(e) => this.setState({ email: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        value={this.state.password}
        onChange={(e) => this.setState({ password: e.target.value })}
      />
      <button onClick={::this.onSignUp}>Sign up</button>
      <button onClick={::this.onSignIn}>Sign in</button>
      <PostAdder />
      <TableOptions />
      <PostTable />
    </div>);
  }

  onSignUp() {
    this.props.signUp(this.state.email, this.state.password);
  }

  onSignIn() {
    this.props.signIn(this.state.email, this.state.password);
  }
}

const mapStateToProps = ({}) => { 
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (username, password) => dispatch(signUp(username, password)),
    signIn: (username, password) => dispatch(signIn(username, password)),
    editPost: () => dispatch(editPost()),
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
