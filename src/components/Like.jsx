// @flow

import React, { PropTypes } from 'react';

import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';

export default function Like(props) {
  return (
    <IconButton onClick={props.onClick}>
      <FontIcon className="material-icons">thumb_up</FontIcon>
    </IconButton>
  );
}

Like.propTypes = {
  onClick: PropTypes.func.isRequired,
};
