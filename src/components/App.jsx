// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addItem, editItem } from '../actions/items';
import { signUp, signIn } from '../actions/user';

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
      {this.props.items.map((item) => (<p key={item.id}>{item.title}</p>))}
      <br/>
      <input 
        type="text" 
        value={this.state.newTitle} 
        onChange={(e) => this.setState({ newTitle: e.target.value })}
      />
      <button onClick={::this.onAddItem}>Click!</button>
    </div>);
  }

  onSignUp() {
    this.props.signUp(this.state.email, this.state.password);
  }

  onSignIn() {
    this.props.signIn(this.state.email, this.state.password);
  }

  onAddItem() {
    this.props.addItem(this.state.newTitle);
  }
}

const mapStateToProps = ({ items }) => { 
  return { items };
};

const mapDispatchToProps = (dispath) => {
  return {
    signUp: (username, password) => dispath(signUp(username, password)),
    signIn: (username, password) => dispath(signIn(username, password)),
    addItem: (title) => dispath(addItem(title)),
    editItem: () => dispath(editItem()),
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
