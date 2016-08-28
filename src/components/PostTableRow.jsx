// @flow

import { path } from 'ramda';
import React, { Component, PropTypes } from 'react';
import TimeAgo from 'react-timeago';
import { TableRow, TableRowColumn } from 'material-ui/Table';

import Like from './Like';
import EditButton from './EditButton';

export default class PostTableRow extends Component {

  renderColumns(post) {
    return this.props.columnsNames.map((c, i) => {
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

  render() {
    const { post, user, likePost, editPost } = this.props;
    return (
      <TableRow className={user.email === post.email ? 'my-post' : ''}>
        {this.renderColumns(post)}
        <TableRowColumn>
          <Like
            up={!path(['likes', user.uid], post)}
            onClick={likePost.bind(this, post.id)}
          />
          <EditButton
            onClick={editPost.bind(this, post)}
          />
        </TableRowColumn>
      </TableRow>
    );
  }
}

PostTableRow.propTypes = {
  post: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  likePost: PropTypes.func.isRequired,
  editPost: PropTypes.func.isRequired,
  columnsNames: PropTypes.array.isRequired,
};
