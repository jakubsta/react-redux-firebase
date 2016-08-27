// @flow

import React from 'react';
import { connect } from 'react-redux';

import Paper from 'material-ui/Paper';

import TableOptions from './TableOptions';
import UserPanel from './UserPanel';
import PostTable from './PostTable';
import PostAdder from './PostAdder';

function App() {
  return (
    <div>
      <UserPanel />
      <PostAdder />
      <Paper>
        <TableOptions />
        <PostTable />
      </Paper>
    </div>
  );
}

const mapStateToProps = () => ({});

export default connect(mapStateToProps)(App);
