/**
 * Copyright © 2016 Konstantin Tarkus <hello@tarkus.me>
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import cx from 'classnames';
import s from './TextField.css';

class TextField extends React.Component {

  static defaultProps = {
    type: 'text',
  };

  static propTypes = {
    className: PropTypes.string,
    onChange: PropTypes.func,
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  };

  constructor() {
    super();
    this.state = { filename: '' };
  }

  componentDidMount() {
    window.componentHandler.upgradeElement(this.refs.root);
  }

  componentWillUnmount() {
    window.componentHandler.downgradeElements(this.refs.root);
  }

  handleAttach = event => {
    this.setState({ filename: event.currentTarget.files[0].name });
    if (this.props.onChange) {
      this.props.onChange(event);
    }
  };

  render() {
    const { className, label, type, onChange } = this.props;
    return (
      <div className={cx('mdl-textfield mdl-js-textfield', {
          'mdl-textfield--floating-label': type === 'text',
          'mdl-textfield--file': type === 'file',
        }, className)} ref="root">
        {
          type === 'file' ?
          <input className="mdl-textfield__input" placeholder="File" type="text" value={this.state.filename} readOnly /> :
          <input className="mdl-textfield__input" type="text" onChange={onChange} />
        }
        {
          type === 'file' ?
          <div className={`mdl-button mdl-button--primary mdl-button--icon ${s.button}`}>
            <i className="material-icons">attach_file</i><input className={s.attach} type="file" onChange={this.handleAttach} />
          </div> :
          <label className="mdl-textfield__label">{label}</label>
        }
      </div>
    );
  }
}

export default TextField;
