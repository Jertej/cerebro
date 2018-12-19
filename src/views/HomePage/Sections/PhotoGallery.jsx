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
        <Gallery images={this.state.images} enableImageSelection={false} />
      </div>
    );
  }
}

PhotoGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      thumbnail: PropTypes.string.isRequired,
      srcset: PropTypes.array,
      caption: PropTypes.string,
      thumbnailWidth: PropTypes.number.isRequired,
      thumbnailHeight: PropTypes.number.isRequired,
      isSelected: PropTypes.bool
    })
  ).isRequired
};

PhotoGallery.defaultProps = {
  images: [
    {
      src: "https://c5.staticflickr.com/9/8768/28941110956_b05ab588c1_b.jpg",
      thumbnail: "https://c5.staticflickr.com/9/8768/28941110956_b05ab588c1_n.jpg",
      thumbnailWidth: 240,
      thumbnailHeight: 320,
      caption: "8H (gratisography.com)"
    },
    {
      src: "https://c3.staticflickr.com/9/8583/28354353794_9f2d08d8c0_b.jpg",
      thumbnail: "https://c3.staticflickr.com/9/8583/28354353794_9f2d08d8c0_n.jpg",
      thumbnailWidth: 320,
      thumbnailHeight: 190,
      caption: "286H (gratisography.com)"
    },
    {
      src: "https://c7.staticflickr.com/9/8569/28941134686_d57273d933_b.jpg",
      thumbnail: "https://c7.staticflickr.com/9/8569/28941134686_d57273d933_n.jpg",
      thumbnailWidth: 320,
      thumbnailHeight: 148,
      caption: "315H (gratisography.com)"
    },
    {
      src: "https://c6.staticflickr.com/9/8342/28897193381_800db6419e_b.jpg",
      thumbnail: "https://c6.staticflickr.com/9/8342/28897193381_800db6419e_n.jpg",
      thumbnailWidth: 320,
      thumbnailHeight: 213,
      caption: "201H (gratisography.com)"
    },
    {
      src: "https://c2.staticflickr.com/9/8239/28897202241_1497bec71a_b.jpg",
      thumbnail: "https://c2.staticflickr.com/9/8239/28897202241_1497bec71a_n.jpg",
      thumbnailWidth: 248,
      thumbnailHeight: 320,
      caption: "Big Ben (Tom Eversley - isorepublic.com)"
    },
    {
      src: "https://c7.staticflickr.com/9/8785/28687743710_3580fcb5f0_b.jpg",
      thumbnail: "https://c7.staticflickr.com/9/8785/28687743710_3580fcb5f0_n.jpg",
      thumbnailWidth: 320,
      thumbnailHeight: 113,
      caption: "Red Zone - Paris (Tom Eversley - isorepublic.com)"
    },
    {
      src: "https://c6.staticflickr.com/9/8520/28357073053_cafcb3da6f_b.jpg",
      thumbnail: "https://c6.staticflickr.com/9/8520/28357073053_cafcb3da6f_n.jpg",
      thumbnailWidth: 313,
      thumbnailHeight: 320,
      caption: "Wood Glass (Tom Eversley - isorepublic.com)"
    },
    {
      src: "https://c8.staticflickr.com/9/8104/28973555735_ae7c208970_b.jpg",
      thumbnail: "https://c8.staticflickr.com/9/8104/28973555735_ae7c208970_n.jpg",
      thumbnailWidth: 320,
      thumbnailHeight: 213,
      caption: "Flower Interior Macro (Tom Eversley - isorepublic.com)"
    },

    {
      src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
      thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
      thumbnailWidth: 320,
      thumbnailHeight: 174,
      caption: "After Rain"
    },
    {
      src: "https://c6.staticflickr.com/9/8890/28897154101_a8f55be225_b.jpg",
      thumbnail: "https://c6.staticflickr.com/9/8890/28897154101_a8f55be225_n.jpg",
      thumbnailWidth: 320,
      thumbnailHeight: 183,
      caption: "37H"
    },
    {
      src: "https://c6.staticflickr.com/9/8342/28897193381_800db6419e_b.jpg",
      thumbnail: "https://c6.staticflickr.com/9/8342/28897193381_800db6419e_n.jpg",
      thumbnailWidth: 320,
      thumbnailHeight: 213,
      caption: "201H"
    },
    {
      src: "https://c1.staticflickr.com/9/8330/28941240416_71d2a7af8e_b.jpg",
      thumbnail: "https://c1.staticflickr.com/9/8330/28941240416_71d2a7af8e_n.jpg",
      thumbnailWidth: 320,
      thumbnailHeight: 213,
      caption: "Surfer Sunset (Tom Eversley - isorepublic.com)"
    },
    {
      src: "https://c6.staticflickr.com/9/8593/28357129133_f04c73bf1e_b.jpg",
      thumbnail: "https://c6.staticflickr.com/9/8593/28357129133_f04c73bf1e_n.jpg",
      thumbnailWidth: 320,
      thumbnailHeight: 179,
      caption: "Untitled (Jan Vasek - jeshoots.com)"
    },
    {
      src: "https://c7.staticflickr.com/9/8546/28354329294_bb45ba31fa_b.jpg",
      thumbnail: "https://c7.staticflickr.com/9/8546/28354329294_bb45ba31fa_n.jpg",
      thumbnailWidth: 320,
      thumbnailHeight: 213,
      caption: "Red Apples with other Red Fruit (foodiesfeed.com)"
    },
    {
      src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
      thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
      thumbnailWidth: 320,
      thumbnailHeight: 212,
      caption: "Boats (Jeshu John - designerspics.com)"
    },
    {
      src: "https://c5.staticflickr.com/9/8768/28941110956_b05ab588c1_b.jpg",
      thumbnail: "https://c5.staticflickr.com/9/8768/28941110956_b05ab588c1_n.jpg",
      thumbnailWidth: 240,
      thumbnailHeight: 320,
      caption: "8H (gratisography.com)"
    },
    {
      src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
      thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
      thumbnailWidth: 320,
      thumbnailHeight: 212,
      caption: "Color Pencils (Jeshu John - designerspics.com)"
    }
  ]
};
