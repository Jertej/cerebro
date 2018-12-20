/*eslint-disable*/
import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import TextField from "@material-ui/core/TextField";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";

import loginPageStyle from "assets/jss/material-kit-react/views/loginPage.jsx";

const renderTextField = ({ input, label, ...custom }) => (
  <TextField {...input} label={label} {...custom} fullWidth />
);

const required = value => (value ? undefined : "Required");

class UploadForm extends React.Component {
  render() {
    const getFormValues = () => {
      return {
        src: this.props.formValues.values.src,
        name: this.props.formValues.values.name
      };
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
                validate={required}
                name="src"
                component={renderTextField}
                label="Link to your photo"
              />
            </div>
            <div>
              <Field validate={required}
                     name="name"
                     component={renderTextField}
                     label="Name"/>
            </div>
            <div>
              <Field
                validate={required}
                name="description"
                component={renderTextField}
                label="Description"
              />
            </div>
          </form>
        </CardBody>
        <CardFooter className={classes.cardFooter}>
          <Button onClick={() => handleSubmit(getFormValues())} type="submit" simple color="info" size="lg">
            Upload
          </Button>
        </CardFooter>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  return {
    formValues: state.form.UploadForm
  };
};

export default withStyles(loginPageStyle)(
  reduxForm({ form: "UploadForm" })(
    connect(
      mapStateToProps,
      null
    )(UploadForm)
  )
);
