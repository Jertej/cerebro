import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
// core components
import Header from "components/Header/Header.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import AttachFile from "@material-ui/icons/AttachFile";
import Layers from "@material-ui/icons/Layers";

import CustomFileInput from "components/CustomFileInput/CustomFileInput.jsx";

import ImageUpload from "components/CustomUpload/ImageUpload";

import loginPageStyle from "assets/jss/material-kit-react/views/loginPage.jsx";

import image from "assets/img/bg7.png";

class UploadPage extends React.Component {
  constructor(props) {
    super(props);
    // we use this to make the card to appear after the page has been rendered
    this.state = {
      cardAnimaton: "cardHidden"
    };
  }

  componentDidMount() {
    // we add a hidden class to the card and after 700 ms we delete it and the transition appears
    setTimeout(
      function() {
        this.setState({ cardAnimaton: "" });
      }.bind(this),
      700
    );
  }

  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <Header
          absolute
          color="transparent"
          brand="Cérebro"
          rightLinks={<HeaderLinks />}
          {...rest}
        />
        <div
          className={classes.pageHeader}
          style={{
            backgroundImage: "url(" + image + ")",
            backgroundSize: "cover",
            backgroundPosition: "top center"
          }}
        >
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={5} md={5} lg={6} el={6}>
                <div className="up">
                  <div id="file-uploader">
                    <div className={classes.title}>
                      <h3>File Uploader</h3>
                    </div>
                    <h4>Regular Image</h4>
                    <ImageUpload
                      addButtonProps={{ round: true }}
                      changeButtonProps={{ round: true }}
                      removeButtonProps={{ round: true, color: "danger" }}
                    />
                  </div>
                </div>
              </GridItem>
              <GridItem xs={12} sm={5} md={5} lg={6} el={3}>
                <CustomInput
                  white
                  labelText="With floating label"
                  id="float"
                  formControlProps={{
                    fullWidth: true
                  }}
                />
                <CustomInput
                  white
                  labelText="With floating label"
                  id="float"
                  formControlProps={{
                    fullWidth: true
                  }}
                />
                <CustomInput
                  white
                  labelText="With floating label"
                  id="float"
                  formControlProps={{
                    fullWidth: true
                  }}
                />
              </GridItem>
            </GridContainer>
          </div>
          <Footer whiteFont />
        </div>
      </div>
    );
  }
}

export default withStyles(loginPageStyle)(UploadPage);
