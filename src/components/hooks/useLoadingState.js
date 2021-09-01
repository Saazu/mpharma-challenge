import { useState } from 'react';
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
const useLoading = (initialLoadingState = true) => {
  const [loadingState, setLoadingState] = useState(initialLoadingState);

  const startLoading = () => {
    setLoadingState(true);
  };

  const stopLoading = () => {
    setLoadingState(false);
  };

  return {
    loadingState,
    startLoading,
    stopLoading
  };
}

export default useLoading;
