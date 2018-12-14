/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import { Archive, CloudUpload, Face, Home } from "@material-ui/icons";
// core components
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
            href="upload"
            color="transparent"
            className={classes.navLink}
          >
            <CloudUpload className={classes.icons}/> Upload
          </Button>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Button
            href="my-photo"
            color="transparent"
            className={classes.navLink}
          >
            <Archive className={classes.icons}/> My photo
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
