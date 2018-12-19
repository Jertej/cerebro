import React, { Component } from "react";
import Slider from "react-slick";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <h1>Cérebro.</h1>
            <h3>A smart choice if you’re looking to create galleries.</h3>
          </div>
          <div>
            <h1>Upload photo.</h1>
            <h3>Featuring thumbnails, multiple gallery styles.</h3>
          </div>
          <div>
            <h1>Look great.</h1>
            <h3>
              You can magically change the look and feel of your photo gallery.
            </h3>
          </div>
        </Slider>
      </div>
    );
  }
}
