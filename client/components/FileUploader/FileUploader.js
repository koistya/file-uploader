/**
 * Copyright © 2016 Konstantin Tarkus <hello@tarkus.me>
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import { TextField, Button } from '../';
import s from './FileUploader.css';

class FileUploader extends React.Component {

  constructor() {
    super();
    this.state = { name: '', file: null };
  }

  handleName = event => {
    this.setState({ name: event.currentTarget.value });
  };

  handleFile = event => {
    this.setState({ file: event.currentTarget.files[0] });
  };

  handleSubmit = event => {
    event.preventDefault();
    const data = new FormData()
    data.append('file', this.state.file);
    data.append('name', this.state.name);
    console.log(data);
    fetch('/upload', { method: 'POST', body: data });
  };

  render() {
    return (
      <form className={s.form} onSubmit={this.handleSubmit}>
        <p>
          Please, upload an Excel document:
        </p>
        <TextField className={s.field} label="Name" onChange={this.handleName} />
        <TextField className={s.field} label="File" type="file" onChange={this.handleFile} />
        <Button type="submit">Upload</Button>
      </form>
    );
  }

}

export default FileUploader;
