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
function useProductHistoryList() {
  const [productList, setProductList] = useState([]);
  const [error, setError] = useState(false);


  useEffect(() => {
    console.log(process.env.REACT_APP_PRODUCT_LIST_ENDPOINT)
    fetch(process.env.REACT_APP_PRODUCT_LIST_ENDPOINT)
      .then(response => response.json())
      .then((data) => setProductList(data.products))
      .catch(error => setError(true));
  }, []);


  function addNewProduct(product) {
    const newList = [...productList];
    newList.push(product);
    setProductList(newList);
  }

  function editProduct() {

  }

  function deleteProduct(id) {
    const newList = productList.filter((product) => product.id !== id);
    setProductList(newList);
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
