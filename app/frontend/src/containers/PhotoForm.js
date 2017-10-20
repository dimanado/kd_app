import React, { Component } from 'react';
import Dropzone from 'react-dropzone'
import Image from 'Image';

class PhotoForm extends React.Component {
  constructor() {
    super();
    this.state = { files: [] }
  }

  onDrop(files) {
    this.setState({
      files
    });
  }

  avatarSubmit() {
    const avatar = this.state.files[0];
    if(avatar) {
      Image.sendBase64(avatar, this.props.profile.userId)
    }
  }

  render() {
    return (
      <section>
        <div className="dropzone">
          <Dropzone onDrop={this.onDrop.bind(this)}>
            <p>Try dropping some files here, or click to select files to upload.</p>
          </Dropzone>
        </div>
        <button onClick={this.avatarSubmit.bind(this)}>
          Update avatar
        </button>
      </section>
    );
  }
}

export default PhotoForm;