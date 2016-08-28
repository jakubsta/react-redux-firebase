// @flow

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow } from 'material-ui/Table';

import { editPost } from '../actions/edit';
import { likePost, fetchPostsIfNotAvailable } from '../actions/posts';
import PostTableRow from './PostTableRow';

class PostTable extends Component {

  static propTypes = {
    posts: PropTypes.array.isRequired,
    user: PropTypes.object.isRequired,
    likePost: PropTypes.func.isRequired,
    editPost: PropTypes.func.isRequired,
    fetchPosts: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.columnsNames = ['id', 'email', 'title', 'viewsCount', 'likesCount', 'createdAt'];
  }

  componentWillMount() {
    this.props.fetchPosts();
  }

  renderRows() {
    return this.props.posts.map((p) => (
      <PostTableRow
        post={p}
        key={p.id}
        user={this.props.user}
        likePost={this.props.likePost}
        editPost={this.props.editPost}
        columnsNames={this.columnsNames}
      />
    ));
  }

  renderHeaders() {
    return this.columnsNames.map((c, i) => (<TableHeaderColumn key={i}>{c}</TableHeaderColumn>));
  }

  render() {
    return (
      <Table selectable={false}>
        <TableHeader
          displaySelectAll={false}
          adjustForCheckbox={false}
        >
          <TableRow>
            {this.renderHeaders()}
            <TableHeaderColumn />
          </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={false}>
          {this.renderRows()}
        </TableBody>
      </Table>
    );
  }
}

const mapStateToProps = ({ posts, auth: { user } }) => ({
  posts,
  user,
});

const mapDispatchToProps = (dispatch) => ({
  likePost: (postId) => dispatch(likePost(postId)),
  editPost: (post) => dispatch(editPost(post)),
  fetchPosts: () => dispatch(fetchPostsIfNotAvailable()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostTable);
