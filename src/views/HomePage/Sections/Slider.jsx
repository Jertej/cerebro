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
            <h1>Material Kit React.</h1>
            <h3>A Badass Material-UI Kit based on Material Design.</h3>
          </div>
          <div>
            <h1>Material Kit React.</h1>
            <h3>A Badass Material-UI Kit based on Material Design.</h3>
          </div>
          <div>
            <h1>Material Kit React.</h1>
            <h3>A Badass Material-UI Kit based on Material Design.</h3>
          </div>
        </Slider>
      </div>
    );
  }
}
