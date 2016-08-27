// @flow

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import Dialog from 'material-ui/Dialog';
import { Tabs, Tab } from 'material-ui/Tabs';

import { signUp, signIn } from '../actions/user';

import EmailPassword from './EmailPassword';

function UserPanel(props) {
  return (
    <Dialog
      open={props.userPanelVisible}
    >
      <Tabs>
        <Tab label="Sign In">
          <h4>{props.signingInError}</h4>
          <EmailPassword
            label="Sign In"
            onAction={props.signIn}
          />
        </Tab>
        <Tab label="Sign Up">
          <h4>{props.signingUpError}</h4>
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
  signingUpError: PropTypes.string,
  signIn: PropTypes.func.isRequired,
  signingInError: PropTypes.string,
};

const mapStateToProps = ({ user: { signingUpError, signingInError, user } }) => ({
  signingInError,
  signingUpError,
  userPanelVisible: user === null,
});

const mapDispatchToProps = (dispatch) => ({
  signUp: (username, password) => dispatch(signUp(username, password)),
  signIn: (username, password) => dispatch(signIn(username, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserPanel);
