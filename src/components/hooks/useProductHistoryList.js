import { useState, useEffect } from 'react';
/**
 * @typedef {object} LoadingStateHook
 * @property {boolean} loadingState - current loading state
 * @property {function} startLoading - function to change loading state to true
 * @property {function} stopLoading - function to change loading state to false
 */

/**
 * 
 * @param {boolean} initialLoadingState - initial loadingstate
 * @return {LoadingStateHook}
 */
function useProductHistoryList(initialLoadingState = true) {
  const [productList, setProductList] = useState(initialLoadingState);
  const [error, setError] = useState(initialLoadingState);


  useEffect(() => {
    fetch(process.env.PRODUCT_LIST_ENDPOINT)
      .then(response => response.json())
      .then((data) => setProductList(data))
      .catch(error => setError(error));
  }, []);


  function addNewProduct() {

  }

  function editProduct() {

  }

  function deleteProduct() {

  }

  return {
    productList,
    error,
    addNewProduct,
    editProduct,
    deleteProduct,
  };
}

export default useProductHistoryList;
