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
  }

  onValueChange(e) {
    this.setState({ newTitle: e.target.value });
  }

  addPost() {
    this.props.addPost(this.state.newTitle);
  }

  render() {
    return (
      <div>
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
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  user,
});
const mapDispatchToProps = (dispatch) => ({
  addPost: (title) => dispatch(addPost(title)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostAdder);
