// @flow

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import TimeAgo from 'react-timeago';

import { Table, TableBody, TableHeader,
  TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';

import Like from './Like';
import { likePost, editPost, fetchPostsIfNotAvailable } from '../actions/posts';

class PostTable extends Component {

  static propTypes = {
    posts: PropTypes.array.isRequired,
    likePost: PropTypes.func.isRequired,
    fetchPosts: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.columnsNames = ['id', 'email', 'title', 'viewsCount', 'likesCount', 'createdAt'];
  }

  componentWillMount() {
    this.props.fetchPosts();
  }

  renderRow(post) {
    return this.columnsNames.map((c, i) => {
      if (c === 'createdAt') {
        return (
          <TableRowColumn key={i}>
            <TimeAgo date={post[c]} />
          </TableRowColumn>
        );
      }
      return (<TableRowColumn key={i}>{post[c]}</TableRowColumn>);
    });
  }

  renderRows() {
    return this.props.posts.map((p) => (
      <TableRow key={p.id}>
        {this.renderRow(p)}
        <TableRowColumn>
          <Like onClick={this.props.likePost.bind(this, p.id)} />
        </TableRowColumn>
      </TableRow>
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

const mapStateToProps = ({ posts }) => ({ posts });

const mapDispatchToProps = (dispatch) => ({
  likePost: (postId) => dispatch(likePost(postId)),
  editPost: (title) => dispatch(editPost(title)),
  fetchPosts: () => dispatch(fetchPostsIfNotAvailable()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostTable);
