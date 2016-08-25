// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';

import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';

import { changePageSize } from '../actions/pageSize';

class TableOptions extends Component {

  constructor(props) {
    super(props);

    this.defaultOptions = this.renderOptions();
    this.defaultButtonAttributes = {
      touch: true, 
      tooltipPosition: 'top-right',
    };
  }

  render() {
    return (
      <div>
        <IconButton 
          {...this.defaultButtonAttributes}
          tooltip="Go to first page"
        >
          <FontIcon className="material-icons">fast_rewind</FontIcon>
        </IconButton>
        <SelectField 
          maxHeight={200}
          hintText="Page size"
          value={this.props.pageSize}
          onChange={::this.changePageSize}
        >
          {this.defaultOptions}
        </SelectField>
        <IconButton
          {...this.defaultButtonAttributes}
          tooltip="To next page"
        >
          <FontIcon className="material-icons">skip_next</FontIcon>
        </IconButton>
      </div>
    );
  }

  renderOptions() {
    const options = [];
    for (let i = 5; i <= 50; i+=5 ) {
      options.push(<MenuItem value={i} key={i} primaryText={i} />);
    }

    return options;
  }

  changePageSize(e, i, value) {
    this.props.changePageSize(value);
  }
}

const mapStateToProps = ({ pageSize }) => ({ pageSize });
const mapDispatchToProps = (dispatch) => {
  return {
    changePageSize: (pageSize) => dispatch(changePageSize(pageSize))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TableOptions);
