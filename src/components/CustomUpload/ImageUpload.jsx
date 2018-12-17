import React from "react";
// used for making the prop types of this component
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";


// core components
import Button from "components/CustomButtons/Button.jsx";

import defaultImage from "assets/img/image_placeholder.jpg";

import imageUploadStyle from "assets/jss/material-kit-react/components/imageUploadStyle.jsx";

class ImageUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
      imagePreviewUrl: defaultImage
    };
    this.handleImageChange = this.handleImageChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleImageChange(e) {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    };
    reader.readAsDataURL(file);
  }

  handleSubmit(e) {
    e.preventDefault();
    // this.state.file is the file/image uploaded
    // in this function you can save the image (this.state.file) on form submit
    // you have to call it yourself
  }

  handleClick() {
    this.refs.fileInput.click();
  }

  handleRemove() {
    this.setState({
      file: null,
      imagePreviewUrl: defaultImage
    });
    this.refs.fileInput.value = null;
  }

  render() {
    const {
      classes,
      addButtonProps,
      changeButtonProps,
      removeButtonProps
    } = this.props;
    return (
      <div className={classes.fileinput}>
        <input className={classes.imgInput} type="file" onChange={this.handleImageChange} ref="fileInput"/>
        <div className={classes.thumbnail}>
          <img className={classes.thubmnailImg} src={this.state.imagePreviewUrl} alt="..."/>
        </div>
        <div>
          {this.state.file === null ? (
            <Button {...addButtonProps} onClick={() => this.handleClick()}>
              Select image
            </Button>
          ) : (
            <span>
              <Button {...changeButtonProps} onClick={() => this.handleClick()}>
                Change
              </Button>
              <Button
                {...removeButtonProps}
                onClick={() => this.handleRemove()}
              >
                <i className="fas fa-times" /> Remove
              </Button>
            </span>
          )}
        </div>
      </div>
    );
  }
}

ImageUpload.propTypes = {
  avatar: PropTypes.bool,
  addButtonProps: PropTypes.object,
  changeButtonProps: PropTypes.object,
  removeButtonProps: PropTypes.object
};

export default withStyles(imageUploadStyle)(ImageUpload);
