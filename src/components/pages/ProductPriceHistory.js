import React from "react";
import useProductHistoryList from "../hooks/useProductHistoryList";

function ProductPricePage() {
  const a = useProductHistoryList();
  console.log(a)
  return (
    <div>
      Hello Products
    </div>
  );
}

export default ProductPricePage;