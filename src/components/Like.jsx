// @flow

import React, { PropTypes } from 'react';

import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';

export default function Like(props) {
  return (
    <IconButton onClick={props.onClick}>
      <FontIcon className="material-icons">{props.up ? 'thumb_up' : 'thumb_down'}</FontIcon>
    </IconButton>
  );
}

Like.propTypes = {
  up: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};
