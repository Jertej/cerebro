/*eslint-disable*/
import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { CloudUpload, Face, Home } from "@material-ui/icons";
import Button from "components/CustomButtons/Button.jsx";

import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx";

function HeaderLinks({ ...props }) {
  const { classes } = props;
  return (
    <List className={classes.list}>
        <ListItem className={classes.listItem}>
          <Button
            href="/"
            color="transparent"
            className={classes.navLink}
          >
            <Home className={classes.icons}/> Home
          </Button>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Button
            href="contacts"
            color="transparent"
            className={classes.navLink}
          >
            <Face className={classes.icons}/> Contacts
          </Button>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Button
            href="upload-page"
            color="transparent"
            className={classes.navLink}
          >
            <CloudUpload className={classes.icons}/> Upload
          </Button>
        </ListItem>
      <ListItem className={classes.listItem}>
        <Button color="transparent"
                href="login-page"
        >
          login
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button color="transparent"
                href="signup-page"
        >
          Sign Up
        </Button>
      </ListItem>
    </List>
  );
}

export default withStyles(headerLinksStyle)(HeaderLinks);
