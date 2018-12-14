import React from "react";
// nodejs library that concatenates classes
// react components for routing our app without refresh
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import SimpleSlider from "./Sections/Slider";

import homePageStyle from "assets/jss/material-kit-react/views/HomePage";

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
                  <SimpleSlider />
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>

        {/*<div className={classNames(classes.main, classes.mainRaised)}>add</div>*/}
        <Footer />
      </div>
    );
  }
}

export default withStyles(homePageStyle)(HomePage);
