// @flow

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import { addPost } from '../actions/posts';
import { switchUserPanel } from '../actions/userPanel';

class PostAdder extends Component {

  static propTypes = {
    user: PropTypes.func.object,
    addPost: PropTypes.func.isRequired,
    openUserPanel: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);

    this.state = { newTitle: '' };

    this.addPost = this.addPost.bind(this);
    this.onValueChange = this.onValueChange.bind(this);
  }

  onValueChange(e) {
    this.setState({ newTitle: e.target.value });
  }

  addPost() {
    this.props.addPost(this.state.newTitle);
  }

  render() {
    if (this.props.user.user) {
      return (
        <Paper>
          <TextField
            hintText="Post title"
            value={this.state.newTitle}
            onChange={this.onValueChange}
          />
          <RaisedButton
            primary
            label="Add"
            onClick={this.addPost}
          />
        </Paper>
      );
    }
    return (
      <Paper>
        <RaisedButton
          primary
          label="Sign In/Up"
          onClick={this.props.openUserPanel}
        />
        <b>You have to sign in to add a post</b>
      </Paper>
    );
  }

}

const mapStateToProps = ({ user }) => ({ user });
const mapDispatchToProps = (dispatch) => ({
  addPost: (title) => dispatch(addPost(title)),
  openUserPanel: () => dispatch(switchUserPanel(true)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostAdder);
