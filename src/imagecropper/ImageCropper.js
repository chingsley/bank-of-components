import React from 'react';
import styled, { css } from 'styled-components';

const Cropper = styled.div`
  ${(props) => {
    console.log(props);
    return css`
      margin: 2rem auto;
      padding: 2rem;

      .image-viewer {
        border: 1px solid blue;
        margin-top: 1rem;
        min-height: 65vh;
        display: flex;
        justify-content: space-between;

        &__crop-view {
          border: 1px solid grey;
          width: 60%;
        }
        &__preview {
          border: 1px solid grey;
          width: 30%;
          background-image: ${!props.selectedImage &&
          'url(http://i.pravatar.cc/500?img=7)'};
          background-repeat: no-repeat;

          &__img {
            display: ${props.selectedImage ? 'block' : 'none'};
            max-width: 100%;
          }
        }
      }
      .image-uploader {
        border: 1px solid black;
        display: inline-block;
        width: auto;

        &__input {
          display: none;
        }
        &__label {
          border: 1px solid blue;
          display: inline-block;
          cursor: pointer;
          padding: 1rem;
        }
      }
    `;
  }}
`;

class ImageCropper extends React.Component {
  state = {
    file: null,
  };

  handleImageChange = (e) => {
    e.persist();
    if (e.target.files[0]) {
      this.setState({ file: URL.createObjectURL(e.target.files[0]) });
    }
  };
  render() {
    return (
      <Cropper selectedImage={this.state.file}>
        <div className="image-viewer">
          <div className="image-viewer__crop-view"></div>
          <div className="image-viewer__preview">
            <img
              src={this.state.file}
              alt="preview"
              className="image-viewer__preview__img"
            />
          </div>
        </div>
        <div className="image-uploader">
          <input
            id="image-uploader-id"
            className="image-uploader__input"
            type="file"
            onChange={this.handleImageChange}
          />
          <label htmlFor="image-uploader-id" className="image-uploader__label">
            Select Image
          </label>
        </div>
      </Cropper>
    );
  }
}

export default ImageCropper;
