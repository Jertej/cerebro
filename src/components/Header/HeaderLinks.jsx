/*eslint-disable*/
import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { CloudUpload, Face, Home } from "@material-ui/icons";
import Button from "components/CustomButtons/Button.jsx";
import { Link } from "react-router-dom";

import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx";

function HeaderLinks({ ...props }) {
  const { classes } = props;
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Link className={classes.navLink} to="/">
          <Button
            color="transparent"
          >
            <Home className={classes.icons}/> Home
          </Button>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link className={classes.navLink} to="contacts">
          <Button
            color="transparent"
          >
            <Face className={classes.icons}/> Contacts
          </Button>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link className={classes.navLink} to="upload-page">
          <Button
            color="transparent"
          >
            <CloudUpload className={classes.icons}/> Upload
          </Button>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link className={classes.navLink} to="login-page">
          <Button color="transparent"
          >
            login
          </Button>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link className={classes.navLink} to="signup-page">
          <Button color="transparent"
          >
            Sign Up
          </Button>
        </Link>
      </ListItem>
    </List>
  );
}

export default withStyles(headerLinksStyle)(HeaderLinks);
