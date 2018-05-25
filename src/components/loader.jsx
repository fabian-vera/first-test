/* eslint-env browser */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Loader extends Component {
  constructor(props) {
    super(props);
    this.isVisible = this.isVisible.bind(this);
  }
  isVisible() {
    if (this.props.showloader) {
      return 'visible';
    }
    return '';
  }
  render() {
    return (
      <div id="loader" className={this.isVisible()}>
        <div className="center-loader">
          <i className="fas fa-spinner fa-3x fa-spin" />
          <span>Loading...</span>
        </div>
      </div>
    );
  }
}

Loader.propTypes = {
  showloader: PropTypes.bool.isRequired,
};

export default Loader;
