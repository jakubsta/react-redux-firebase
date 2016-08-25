// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import { addPost } from '../actions/posts';

class PostAdder extends Component {
  constructor(props) {
    super(props);
    this.state = { newTitle: '' };
  }

  render() {
    return (
      <div>
        <TextField
          hintText="Post title"
          value={this.state.newTitle}
          onChange={(e) => this.setState({ newTitle: e.target.value })}
        />
        <RaisedButton 
          label="Add"
          primary={true}
          onClick={::this.addPost}
        />
      </div>
    );
  }

  addPost() {
    this.props.addPost(this.state.newTitle);
  }
}

const mapStateToProps = () => ({});
const mapDispatchToProps = (dispatch) => {
  return {
    addPost: (title) => dispatch(addPost(title)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostAdder)
