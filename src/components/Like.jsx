// @flow

import React, { Component, PropTypes } from 'react';

import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';

export default class Like extends Component {
  
  render() {
    return (
      <IconButton onClick={this.props.onClick}>
        <FontIcon className="material-icons">thumb_up</FontIcon>
      </IconButton>
    );
  }

  static propTypes = {
    onClick: PropTypes.func.isRequired,
  }
}
