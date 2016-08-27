// @flow

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import Dialog from 'material-ui/Dialog';
import { Tabs, Tab } from 'material-ui/Tabs';

import { switchUserPanel } from '../actions/userPanel';
import { signUp, signIn } from '../actions/user';

import EmailPassword from './EmailPassword';

function UserPanel(props) {
  return (
    <Dialog
      open={props.userPanelVisible}
      onRequestClose={props.closeUserPanel}
    >
      <Tabs>
        <Tab label="Sign In">
          <EmailPassword
            label="Sign In"
            onAction={props.signIn}
          />
        </Tab>
        <Tab label="Sign Up">
          <EmailPassword
            label="Sign Up"
            onAction={props.signUp}
          />
        </Tab>
      </Tabs>
    </Dialog>
  );
}

UserPanel.propTypes = {
  userPanelVisible: PropTypes.bool.isRequired,
  signUp: PropTypes.func.isRequired,
  signIn: PropTypes.func.isRequired,
  closeUserPanel: PropTypes.func.isRequired,
};

const mapStateToProps = ({ userPanel }) => ({ userPanelVisible: userPanel.visible });

const mapDispatchToProps = (dispatch) => ({
  signUp: (username, password) => dispatch(signUp(username, password)),
  signIn: (username, password) => dispatch(signIn(username, password)),
  closeUserPanel: () => dispatch(switchUserPanel(false)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserPanel);
