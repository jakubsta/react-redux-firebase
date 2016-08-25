// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addItem, editItem } from '../actions/items';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { newTitle: '' };
  }

  render() {
    return (<div>
      <h2>App</h2>
      {this.props.items.map((item) => (<p>{item.title}</p>))}
      <br/>
      <input 
        type="text" 
        value={this.state.newTitle} 
        onChange={(v) => this.setState({ newTitle: v.target.value })}
      />
      <button onClick={() => this.props.addItem(this.state.newTitle)}>Click!</button>
    </div>);
  }
}

const mapStateToProps = ({ items }) => { 
  return { items };
};

const mapDispatchToProps = (dispath) => {
  return {
    addItem: (title) => dispath(addItem(title)),
    editItem: () => dispath(editItem())
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
