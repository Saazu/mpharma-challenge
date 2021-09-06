import { useState, useEffect } from 'react';
import useLocalStorageState from './useLocalStorage';
import useLoadingState from "./useLoadingState";

/**
 * @typedef {Object} useProducHistoryListHook
 * @property {Error} error - Any errors retrieving product list
 * @property {Boolean} isLoading - Product list is loading
 * @property {function} addNewProduct
 * @property {function} editProduct
 * @property {function} deleteProduct
 */

/**
 * @return {useProducHistoryListHook}
 */
function useProductHistoryList() {
  const [productList, setProductList] = useState([]);
  const [error, setError] = useState(false);

  const { isLoading, stopLoading } = useLoadingState();
  const [cachedData, setCachedData] = useLocalStorageState("mp-priceHx");

  function saveData(productList) {
    setProductList(productList);
    setCachedData(productList);
  }

  function normalisePrice(product) {
    const { id, name } = product
    return product.prices.map(price => ({
      ...price,
      name,
      deleted: false,
    }));
  }
  function normaliseProductHistoryList(productList) {
    const newList = productList.map(product => normalisePrice(product));
    return newList.flat(1);
  }

  function getData() {
    fetch(process.env.REACT_APP_PRODUCT_LIST_ENDPOINT)
      .then(response => response.json())
      .then((data) => {
        const normalisedList = normaliseProductHistoryList(data.products);
        saveData(normalisedList);
      })
      .then(() => stopLoading())
      .catch(error => {
        setError(true);
        console.log(error);
      });
  }

  useEffect(() => {
    if (cachedData) {
      setProductList(cachedData);
    } else {
      getData();
    }
  }, [cachedData]);

  function addNewProduct(productData) {
    const p = {
      ...productData,
      date: (new Date()).toDateString(),
      id: productList.length + 1,
    };
    const newProductList = [...productList];
    newProductList.push(p);
    saveData(newProductList);
  }

  function editProduct(id, newData) {
    const productToEdit = productList.find((product) => product.id === id);
    const newProductList = [...productList];
    const updatedProduct = { ...productToEdit, ...newData }
    newProductList[(id - 1)] = updatedProduct;
    saveData(newProductList);
  }

  function deleteProduct(id) {
    const productToEdit = productList.find((product) => product.id === id);
    const newProductList = [...productList];
    const updatedProduct = { ...productToEdit, deleted: true }
    newProductList[(id - 1)] = updatedProduct;
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
