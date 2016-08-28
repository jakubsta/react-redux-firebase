// @flow

import React, { PropTypes } from 'react';

import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';

export default function EditButton(props) {
  return (
    <IconButton onClick={props.onClick}>
      <FontIcon className="material-icons">mode_edit</FontIcon>
    </IconButton>
  );
}

EditButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};
