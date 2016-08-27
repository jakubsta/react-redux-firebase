// @flow

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import Paper from 'material-ui/Paper';

import TableOptions from './TableOptions';
import UserPanel from './UserPanel';
import PostTable from './PostTable';
import PostAdder from './PostAdder';

function App(props) {
  if (props.user !== null) {
    return (
      <div>
        <UserPanel />
        <Paper className="table-container">
          <PostAdder />
          <TableOptions />
          <PostTable />
        </Paper>
      </div>
    );
  }

  return (<UserPanel />);
}

App.propTypes = {
  user: PropTypes.object,
};

const mapStateToProps = ({ auth: { user } }) => ({ user });

export default connect(mapStateToProps)(App);
