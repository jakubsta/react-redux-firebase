// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';

import Dialog from 'material-ui/Dialog';
import { Tabs, Tab } from 'material-ui/Tabs';

import { switchUserPanel } from '../actions/userPanel';
import { signUp, signIn } from '../actions/user';

import EmailPassword from './EmailPassword'; 

class UserPanel extends Component {

  render() {
    return (
      <Dialog
        open={this.props.userPanel.visible}
        onRequestClose={this.props.closeUserPanel}
      >
        <Tabs>
          <Tab label="Sign In">
            <EmailPassword 
              label="Sign In"
            />
          </Tab>
          <Tab label="Sign Up">
            <EmailPassword
              label="Sign Up"
            />
          </Tab>
        </Tabs>
      </Dialog>
    );  
  }

  onSignUp() {
    this.props.signUp(this.state.email, this.state.password);
  }

  onSignIn() {
    this.props.signIn(this.state.email, this.state.password);
  }

}

const mapStateToProps = ({ userPanel }) => { 
  return { userPanel };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (username, password) => dispatch(signUp(username, password)),
    signIn: (username, password) => dispatch(signIn(username, password)),
    closeUserPanel: () => dispatch(switchUserPanel(false)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(UserPanel)
