// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';

import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import { addPost } from '../actions/posts';
import { switchUserPanel } from '../actions/userPanel';

class PostAdder extends Component {
  constructor(props) {
    super(props);
    this.state = { newTitle: '' };
  }

  render() {
    if(this.props.user.user) {
      return (
        <Paper>
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
        </Paper>
      );
    }
    return (
      <Paper>
        <RaisedButton 
          label="Sign In/Up"
          primary={true}
          onClick={this.props.openUserPanel}
        />
        <b>You have to sign in to add a post</b>
      </Paper>
    );
  }

  addPost() {
    this.props.addPost(this.state.newTitle);
  }
}

const mapStateToProps = ({ user }) => ({ user });
const mapDispatchToProps = (dispatch) => {
  return {
    addPost: (title) => dispatch(addPost(title)),
    openUserPanel: () => dispatch(switchUserPanel(true)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostAdder)
