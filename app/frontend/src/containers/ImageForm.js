import React, { Component } from 'react';
import { ButtonToolbar, Button } from 'react-bootstrap';
import Dropzone from 'react-dropzone';
import convertImage from 'ConvertImage';
import Api from 'Api';
import Auth from 'Auth';
import 'DropZone.css';

class ImageForm extends Component {
  constructor(props) {
    super(props);
    this.state = { files: [],
      currentAvatar: this.props.profile.avatar};
  }

  onDrop(files) {
    this.setState({ files,
      currentAvatar: files[0].preview });
  }

  submitImage() {
    const avatar = this.state.files[0];
    if (avatar) {
      convertImage.readBase64(avatar)
      .then(avatar => {
        this.props.handleSubmit(avatar, this.props.profile.userId)
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
            <img
              src={this.state.currentAvatar}
            />
          </Dropzone>
        </div>
        <ButtonToolbar>
          <Button onClick={this.submitImage.bind(this)}>Update image</Button>
        </ButtonToolbar>
      </section>
    );
  }
}

export default ImageForm;
