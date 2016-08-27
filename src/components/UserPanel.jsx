// @flow

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import Dialog from 'material-ui/Dialog';
import { Tabs, Tab } from 'material-ui/Tabs';
import LinearProgress from 'material-ui/LinearProgress';

import { signUp, signIn } from '../actions/user';

import EmailPassword from './EmailPassword';

function UserPanel(props) {
  return (
    <Dialog
      open={props.userPanelVisible}
      bodyStyle={{padding: 0}}
    >
      <Tabs>
        <Tab label="Sign In">
          <div className="user-tab">
            {props.signingIn ? <LinearProgress mode="indeterminate" /> : null}
            <h4>{props.signingInError}</h4>
            <EmailPassword
              label="Sign In"
              onAction={props.signIn}
            />
          </div>
        </Tab>
        <Tab label="Sign Up">
          <div className="user-tab">
            {props.signingUp ? <LinearProgress mode="indeterminate" /> : null}
            <h4>{props.signingUpError}</h4>
            <EmailPassword
              label="Sign Up"
              onAction={props.signUp}
            />
          </div>
        </Tab>
      </Tabs>
    </Dialog>
  );
}

UserPanel.propTypes = {
  userPanelVisible: PropTypes.bool.isRequired,
  signUp: PropTypes.func.isRequired,
  signingUp: PropTypes.bool.isRequired,
  signingUpError: PropTypes.string,
  signIn: PropTypes.func.isRequired,
  signingIn: PropTypes.bool.isRequired,
  signingInError: PropTypes.string,
};

const mapStateToProps = ({ user }) => ({
  signingUp: user.signingUp,
  signingIn: user.signingIn,
  signingInError: user.signingInError,
  signingUpError: user.signingUpError,
  userPanelVisible: user.user === null,
});

const mapDispatchToProps = (dispatch) => ({
  signUp: (username, password) => dispatch(signUp(username, password)),
  signIn: (username, password) => dispatch(signIn(username, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserPanel);
