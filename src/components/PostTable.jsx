// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';

import TimeAgo from 'react-timeago';

import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

import { editItem } from '../actions/posts';

class PostTable extends Component {

  constructor(props) {
    super(props);
    this.columnsNames = ['id', 'email', 'title', 'views', 'likes', 'createdAt'];
  }

  render() {
    return (
      <Table>
        <TableHeader
          displaySelectAll={false}
          adjustForCheckbox={false}
        >
          <TableRow>
            {this.renderHeaders()}
          </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={false}>
          {this.renderRows()}
        </TableBody>
      </Table>
    );
  }

  renderHeaders() {
    return this.columnsNames.map((c, i) => (<TableHeaderColumn key={i}>{c}</TableHeaderColumn>));
  }

  renderRows() {
    return this.props.posts.map((p) => {
      return (
        <TableRow key={p.id}>
          {this.renderRow(p)}
        </TableRow>
      );
    });
  }

  renderRow(post) {
    return this.columnsNames.map((c, i) => {
      if(c === 'createdAt') {
        return (
          <TableRowColumn key={i}>
            <TimeAgo date={post[c]} />
          </TableRowColumn>
        );
      }
      return (<TableRowColumn key={i}>{post[c]}</TableRowColumn>);
    });
  }
}

const mapStateToProps = ({ posts, user }) => { 
  return { posts };
};
const mapDispatchToProps = (dispatch) => {
  return {
    editItem: (title) => dispatch(editItem(title)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostTable)
