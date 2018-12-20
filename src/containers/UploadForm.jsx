import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import TextField from "@material-ui/core/TextField";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import { Field, reduxForm } from "redux-form";

import loginPageStyle from "assets/jss/material-kit-react/views/loginPage.jsx";

const renderTextField = ({ input, label, ...custom }) => (
  <TextField {...input} label={label} {...custom} fullWidth />
);

class UploadForm extends React.Component {
  render() {
    const newImage = {
      src: "https://c5.staticflickr.com/9/8768/28941110956_b05ab588c1_b.jpg",
      name: "klsadlfj"
    };
    const { handleSubmit, classes } = this.props;
    return (
      <Card>
        <CardHeader color="info" className={classes.cardHeader}>
          <h4>Upload photo</h4>
        </CardHeader>
        <CardBody>
          <form>
            <div>
              <Field
                name="src"
                component={renderTextField}
                label="Link to your photo"
              />
            </div>
            <div>
              <Field name="name" component={renderTextField} label="Name" />
            </div>
            <div>
              <Field
                name="description"
                component={renderTextField}
                label="Description"
              />
            </div>
          </form>
        </CardBody>
        <CardFooter className={classes.cardFooter}>
          <Button onClick={() => handleSubmit(newImage)} type="submit" simple color="info" size="lg">
            Upload
          </Button>
        </CardFooter>
      </Card>
    );
  }
}

export default withStyles(loginPageStyle)(
  reduxForm({ form: "UploadForm" })(UploadForm)
);
