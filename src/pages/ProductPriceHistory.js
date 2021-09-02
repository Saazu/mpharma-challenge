import { makeStyles } from "@material-ui/core";
import React from "react";
import useProductHistoryList from "../hooks/useProductHistoryList";
import NavBar from "../components/NavBar";

const useStyles = makeStyles((theme) => ({

}));

function ProductPricePage() {
  const { productList } = useProductHistoryList();
  const styles = useStyles();

  return (
    <div>
      <NavBar />
      Hello Products
    </div>
  );
}

export default ProductPricePage;