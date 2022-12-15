import { useEffect, useRef } from 'react';

export const useInterval = (callback: Function, delay: number = 4000) => {
  const savedCallback = useRef<Function>(() => {});

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }

    return () => {};
  }, [delay]);
};
export default useInterval;
