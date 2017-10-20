import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import Image from 'Image';
import Api from 'Api';
import Auth from 'Auth';

class PhotoForm extends Component {
  constructor() {
    super();
    this.state = { files: [] };
  }

  onDrop(files) {
    this.setState({ files });
  }

  avatarSubmit() {
    const avatar = this.state.files[0];
    if (avatar) {
      Image.readBase64(avatar)
      .then(avatar => {
        Api.profileUpdate(this.props.profile.userId, { avatar }, Auth.getUserTokens())
        .then(response => {
          alert('Data updated.');
        })
        .catch(error => {
          console.log(error);
        });
      })
      .catch(error => {
        console.log(error);
      });
    }
  }

  render() {
    return (
      <section>
        <div className="dropzone">
          <Dropzone onDrop={this.onDrop.bind(this)}>
            <p>
              Try dropping some files here, or click to select files to upload.
            </p>
          </Dropzone>
        </div>
        <button onClick={this.avatarSubmit.bind(this)}>Update avatar</button>
      </section>
    );
  }
}

export default PhotoForm;
