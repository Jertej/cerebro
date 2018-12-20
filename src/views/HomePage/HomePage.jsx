import React from "react";
import classNames from "classnames";
import withStyles from "@material-ui/core/styles/withStyles";
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
import InfoArea from "components/InfoArea/InfoArea.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import HeaderSlider from "./Sections/HeaderSlider";

import { connect } from "react-redux";

import homePageStyle from "assets/jss/material-kit-react/views/HomePage";

import PhotoGallery from "./Sections/PhotoGallery";

class HomePage extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <Header
          brand="Cérebro"
          rightLinks={<HeaderLinks />}
          fixed
          color="transparent"
          changeColorOnScroll={{
            height: 400,
            color: "white"
          }}
          {...rest}
        />
        <Parallax image={require("assets/img/bg4.jpg")}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem>
                <div className={classes.brand}>
                  <HeaderSlider />
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <div className={classes.section}>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={8}>
                  <h2 className={classes.titleText}>Let's talk about Gallery</h2>
                  <h5 className={classes.description}>
                    This is the paragraph where you can write more details about your
                    product. Keep you user engaged by providing meaningful
                    information. Remember that by this time, the user is curious,
                    otherwise he wouldn't scroll to get here. Add a button if you want
                    the user to see more.
                  </h5>
                </GridItem>
              </GridContainer>
              <div>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={4}>
                    <InfoArea
                      title="Free"
                      description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
                      icon={Chat}
                      iconColor="info"
                      vertical
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <InfoArea
                      title="Verified Users"
                      description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
                      icon={VerifiedUser}
                      iconColor="success"
                      vertical
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <InfoArea
                      title="Beautiful"
                      description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
                      icon={Fingerprint}
                      iconColor="danger"
                      vertical
                    />
                  </GridItem>
                </GridContainer>
              </div>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={8}>
                  <h2 className={classes.titleText}>Here is our photo</h2>
                </GridItem>
              </GridContainer>
              <PhotoGallery images={this.props.images} />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    images: state.default
  };
};

export default withStyles(homePageStyle)(
  connect(
    mapStateToProps,
    null
  )(HomePage)
);
