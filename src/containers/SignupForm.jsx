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
import loginPageStyle from "assets/jss/material-kit-react/views/loginPage.jsx";
import { Link } from "react-router-dom";

const renderTextField = ({ input, label, ...custom }) => (
  <TextField {...input}
             label={label}
             {...custom}
             fullWidth
  />
);

class SignupForm extends React.Component {
  render() {
    const { handleSubmit, classes } = this.props;
    return (
      <Card>
        <CardHeader color="info" className={classes.cardHeader}>
          <h4>Welcome new user</h4>
        </CardHeader>
        <CardBody>
          <form onSubmit={handleSubmit}>
            <div>
              <Field name="login" component={renderTextField} label="Login"/>
            </div>
            <div>
              <Field
                name="password"
                component={renderTextField}
                label="Password"
              />
            </div>
          </form>
        </CardBody>
        <CardFooter className={classes.cardFooter}>
          <Button type="submit" simple color="info" size="lg">
            <Link className={classes.link} to="home">Sign Up</Link>
          </Button>
        </CardFooter>
      </Card>
    );
  }
}

export default withStyles(loginPageStyle)(
  reduxForm({ form: "SignupForm" })(SignupForm)
);
