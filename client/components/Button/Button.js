/**
 * Copyright © 2016 Konstantin Tarkus <hello@tarkus.me>
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import cx from 'classnames';

class Button extends React.Component {

  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
  };

  componentDidMount() {
    window.componentHandler.upgradeElement(this.refs.root);
  }

  componentWillUnmount() {
    window.componentHandler.downgradeElements(this.refs.root);
  }

  render() {
    const { className, children, other } = this.props;
    return (
      <button className={cx('mdl-button mdl-js-button mdl-button--raised',
        'mdl-js-ripple-effect mdl-button--accent', className)} ref="root" {...other}
      >{children}</button>
    );
  }
}

export default Button;
