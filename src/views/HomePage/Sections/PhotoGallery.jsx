import PropTypes from "prop-types";
import React from "react";
import Gallery from "react-grid-gallery";

export default class PhotoGallery extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      images: this.props.images
    };
  }

  render() {
    return (
      <div style={{
        display: "block",
        minHeight: "1px",
        width: "100%",
        overflow: "auto",
        textAlign: "center",
        background: "white"
      }}>
        <Gallery images={this.props.images} enableImageSelection={false} />
      </div>
    );
  }
}

PhotoGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      thumbnail: PropTypes.string,
      srcset: PropTypes.array,
      caption: PropTypes.string,
      thumbnailWidth: PropTypes.number,
      thumbnailHeight: PropTypes.number,
      isSelected: PropTypes.bool
    })
  ).isRequired
};
