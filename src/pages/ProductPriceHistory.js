import { makeStyles, Grid } from "@material-ui/core";
import React from "react";
import useProductHistoryList from "../hooks/useProductHistoryList";
import NavBar from "../components/molecules/NavBar";
import ProductCard from "../components/molecules/ProductCard";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    minWidth: 100
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  grid: {
    margin: "auto"
  }
}));

function ProductPricePage() {
  const { productList, addNewProduct, deleteProduct, editProduct } = useProductHistoryList();
  const classes = useStyles();

  console.log(productList);
  return (
    <div className={classes.root}>
      <NavBar addNewProduct={addNewProduct} />
      <Grid
        container
        spacing={4}
        justifyContent="flex-start"
        alignItems="center"
        className={classes.grid}
      >
        {
          productList
            .filter(prod => prod.deleted === false)
            .map(prod =>
              <Grid
                className={classes.paper}
                key={prod.id}
                item
                xs={12}
                sm={4}
                lg={3}
              >
                <ProductCard  {...prod} deleteProduct={deleteProduct} editProduct={editProduct} />
              </Grid>)
        }
      </Grid>

    </div>
  );
}

export default ProductPricePage;
