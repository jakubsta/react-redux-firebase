// @flow

import { range } from 'ramda';

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';

import { changePageSize, changeToNextPage, changeToFirstPage } from '../actions/page';

class TableOptions extends Component {
  static propTypes = {
    pageSize: PropTypes.number.isRequired,
    changePageSize: PropTypes.func.isRequired,
    changeToFirstPage: PropTypes.func.isRequired,
    changeToNextPage: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);

    // Not sure but react/jsx-no-bind rule is enabled i airbnb eslint
    this.changePageSize = this.changePageSize.bind(this);
    this.defaultOptions = this.renderOptions();
    this.defaultButtonAttributes = {
      touch: true,
      tooltipPosition: 'top-right',
    };
  }

  changePageSize(e, i, value) {
    this.props.changePageSize(value);
  }

  renderOptions() {
    return range(1, 6).map((x) => <MenuItem value={x * 5} key={x * 5} primaryText={x * 5} />);
  }

  render() {
    return (
      <div>
        <IconButton
          {...this.defaultButtonAttributes}
          tooltip="Go to first page"
          onClick={this.props.changeToFirstPage}
        >
          <FontIcon className="material-icons">fast_rewind</FontIcon>
        </IconButton>
        <SelectField
          maxHeight={200}
          hintText="Page size"
          value={this.props.pageSize}
          onChange={this.changePageSize}
        >
          {this.defaultOptions}
        </SelectField>
        <IconButton
          {...this.defaultButtonAttributes}
          tooltip="To next page"
          onClick={this.props.changeToNextPage}
        >
          <FontIcon className="material-icons">skip_next</FontIcon>
        </IconButton>
      </div>
    );
  }
}

const mapStateToProps = ({ page }) => ({ pageSize: page.size });
const mapDispatchToProps = (dispatch) => ({
  changePageSize: (pageSize) => dispatch(changePageSize(pageSize)),
  changeToNextPage: () => dispatch(changeToNextPage()),
  changeToFirstPage: () => dispatch(changeToFirstPage()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TableOptions);
