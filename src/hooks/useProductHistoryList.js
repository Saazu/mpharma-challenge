import { useState, useEffect } from 'react';
import useLocalStorageState from './useLocalStorage';
import useLoadingState from "./useLoadingState";

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

  const { isLoading, stopLoading } = useLoadingState();
  const [cachedData, setCachedData] = useLocalStorageState("mp-priceHx");

  useEffect(() => {
    if (cachedData) {
      setProductList(cachedData);
    } else {
      fetch(process.env.REACT_APP_PRODUCT_LIST_ENDPOINT)
        .then(response => response.json())
        .then((data) => {
          const normalisedList = JSON.stringify(data.products);
          saveData(normalisedList);
        })
        .then(() => stopLoading())
        .catch(error => setError(true));
    }
  }, []);

  function saveData(productList) {
    const normalisedList = JSON.stringify(productList);
    setProductList(normalisedList);
    setCachedData(normalisedList);
  }

  function addNewProduct(product) {
    const newProductList = [...productList];
    newProductList.push(product);
    saveData(newProductList);
  }

  function editProduct(id, newPrice) {
    const productToEdit = productList.filter((product) => product.id === id)
    const newPriceList = [...productToEdit.prices];
    newPriceList.push(newPrice);
    productToEdit.prices = newPriceList;

    const newProductList = productList.filter((product) => product.id !== id)
    newProductList.push(productToEdit);
    saveData(newProductList);
  }

  function deleteProduct(id) {
    const newProductList = productList.filter((product) => product.id !== id);
    saveData(newProductList);
  }

  return {
    productList,
    error,
    isLoading,
    addNewProduct,
    editProduct,
    deleteProduct,
  };
}

export default useProductHistoryList;
