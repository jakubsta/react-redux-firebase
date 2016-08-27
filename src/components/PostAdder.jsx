// @flow

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import { addPost } from '../actions/posts';

class PostAdder extends Component {

  static propTypes = {
    user: PropTypes.object,
    addPost: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);

    this.state = { newTitle: '' };

    this.addPost = this.addPost.bind(this);
    this.onValueChange = this.onValueChange.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
  }

  onValueChange(e) {
    this.setState({ newTitle: e.target.value });
  }

  onKeyDown(e) {
    if (e.keyCode === 13) {
      this.addPost();
    }
  }

  addPost() {
    this.props.addPost(this.state.newTitle);
    this.setState({ newTitle: ''});
  }

  render() {
    return (
      <div>
        <h4>Hi {this.props.user.email}</h4>
        <TextField
          hintText="Post title"
          value={this.state.newTitle}
          onChange={this.onValueChange}
          onKeyDown={this.onKeyDown}
        />
        <RaisedButton
          primary
          label="Add"
          onClick={this.addPost}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ user: { user } }) => ({
  user,
});
const mapDispatchToProps = (dispatch) => ({
  addPost: (title) => dispatch(addPost(title)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostAdder);
