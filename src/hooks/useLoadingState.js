import { useState } from 'react';
/**
 * @typedef {object} LoadingStateHook
 * @property {boolean} isLoading - current loading state
 * @property {function} startLoading - function to change loading state to true
 * @property {function} stopLoading - function to change loading state to false
 */


/**
 * 
 * @param {boolean} initialLoadingState - initial loadingstate
 * @return {LoadingStateHook}
 */
const useLoading = (initialLoadingState = true) => {
  const [isLoading, setLoadingState] = useState(initialLoadingState);

  const startLoading = () => {
    setLoadingState(true);
  };

  const stopLoading = () => {
    setLoadingState(false);
  };

  return {
    isLoading,
    startLoading,
    stopLoading
  };
}

export default useLoading;
