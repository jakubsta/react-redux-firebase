// @flow

import { path } from 'ramda';

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import { saveEditedPost } from '../actions/edit';

class Edit extends Component {

  static propTypes = {
    open: PropTypes.bool.isRequired,
    post: PropTypes.object,
    saveEditedPost: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);

    this.state = { newTitle: '' };

    this.onClick = this.onClick.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  componentWillReceiveProps({ post }) {
    if (post !== null) {
      this.setState({ newTitle: post.title });
    }
  }

  onClick() {
    this.props.saveEditedPost({ ...this.props.post, title: this.state.newTitle });
  }

  onChange(e) {
    this.setState({ newTitle: e.target.value });
  }

  render() {
    const postId = path(['post', 'id'], this.props) || '';
    return (
      <Dialog open={this.props.open}>
        <h4>You are editing post {postId}</h4>
        <TextField
          type="text"
          hintText="New post title"
          onChange={this.onChange}
          value={this.state.newTitle}
        />
        <RaisedButton
          primary
          onClick={this.onClick}
          label="Save!"
        />
      </Dialog>
    );
  }
}

const mapStateToProps = ({ edit: { open, post } }) => ({
  open,
  post,
});

const mapDispatchToProps = (dispatch) => ({
  saveEditedPost: (post) => dispatch(saveEditedPost(post)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Edit);
