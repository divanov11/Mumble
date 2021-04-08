import { useEffect, useState } from 'react';

/**
 * This hook will invoke the asyncFun when the component mounts and
 * automatically create and update a isLoaded boolean when that async function
 * is done.  Useful for showing placeholder loading components or spinners.
 *
 * @param {function} asyncFun the function to wrap with a isLoaded listener
 * @param {function} setterCb the function to invoke for setting the results into a state hook setter
 * @returns
 */
export const useLoadingListener = (asyncFun, setterCb) => {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    asyncFun()
      .then(setterCb)
      .then(() => setIsLoaded(true));
  }, [asyncFun, setterCb]);
  return [isLoaded];
};
