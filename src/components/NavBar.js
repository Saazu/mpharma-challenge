import React from "react";
import { AppBar, IconButton, Toolbar, Grid, Typography } from '@material-ui/core';
import { AddRounded } from '@material-ui/icons';
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  menu: {
    backgroundColor: "#ff451b",
  },
  button: {
    color: "white",
    margin: "5 5 0 4"
  },
  typography: {
    fontWeight: "bold"
  }
}));

function NavBar() {
  const styles = useStyles();

  return (
    <AppBar
      className={styles.menu}
      position="sticky"
    >
      <Toolbar>
        <Grid
          container
          direction="row-reverse"
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item>
            <IconButton
              className={styles.button}
              edge="end"
              color="default"
              aria-label="add product"
            >
              <AddRounded fontSize="medium" />
            </IconButton>
          </Grid>
          <Grid item>
            <Typography
              className={styles.typography}
            >
              Product Price History
            </Typography>
          </Grid>

        </Grid>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar;