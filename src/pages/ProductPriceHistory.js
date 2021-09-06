import React from "react";
import { makeStyles, Grid, CircularProgress } from "@material-ui/core";
import useProductHistoryList from "../hooks/useProductHistoryList";
import NavBar from "../components/molecules/NavBar";
import ProductCard from "../components/molecules/ProductCard";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: "auto",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  progress: {
    minHeight: "100vh",
    display: 'flex',
    justifyContent: "center",
    alignContent: "center",
    margin: "auto",
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
    grid: {
      margin: "auto",
      padding: "4"
    },
    productColumn: {
      padding: "8px",
    },
  },
}));

function ProductPricePage() {
  const { productList, addNewProduct, deleteProduct, editProduct, isLoading, lastPriceId } = useProductHistoryList();
  const classes = useStyles();

  function displayRows() {
    return productList
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
        </Grid>
      )
  }

  return (
    <div className={classes.root}>
      <NavBar addNewProduct={addNewProduct} lastPriceId={lastPriceId} />
      {
        isLoading
          ?
          <div>
            <CircularProgress
              className={classes.progress}
            />
          </div>
          :
          <Grid
            container
            justifyContent="flex-start"
            alignItems="center"
            className={classes.grid}
          >
            {displayRows()}
          </Grid>
      }


    </div>
  );
}

export default ProductPricePage;
