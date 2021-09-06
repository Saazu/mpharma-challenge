import React, { useState } from "react";
import {
  AppBar,
  IconButton,
  Toolbar,
  Grid,
  Typography,
  makeStyles,
} from '@material-ui/core';
import { AddRounded } from '@material-ui/icons';
import AddProductModal from "./AddNewProductModal";

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

function NavBar({ addNewProduct }) {
  const styles = useStyles();
  const [openAddProductMpdal, setOpenAddProductMpdal] = useState(false)

  function closeModal() {
    setOpenAddProductMpdal(false);
  }

  function showModal() {
    setOpenAddProductMpdal(true);
  }
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
            <AddProductModal
              openAddProductMpdal={openAddProductMpdal}
              closeModal={closeModal}
              addNewProduct={addNewProduct}

            />
            <IconButton
              className={styles.button}
              edge="end"
              color="default"
              aria-label="add product"
              onClick={showModal}
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