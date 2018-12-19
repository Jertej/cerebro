import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import TextField from "@material-ui/core/TextField";
// @material-ui/icons
// core components
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import { Field, reduxForm } from "redux-form";

import loginPageStyle from "assets/jss/material-kit-react/views/loginPage.jsx";

const renderTextField = ({ input, label, ...custom }) => (
  <TextField {...input}
             label={label}
             {...custom}
             fullWidth
  />
);

class LoginForm extends React.Component {
  render() {
    const { handleSubmit, classes, reset } = this.props;
    return (
      <Card>
        <CardHeader color="info" className={classes.cardHeader}>
          <h4>Login</h4>
        </CardHeader>
        <CardBody>
          <form onSubmit={handleSubmit}>
            <div>
              <Field name="login" component={renderTextField} label="Login" />
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
            Login
          </Button>
        </CardFooter>
      </Card>
    );
  }
}

export default withStyles(loginPageStyle)(
  reduxForm({ form: "LoginForm" })(LoginForm)
);
