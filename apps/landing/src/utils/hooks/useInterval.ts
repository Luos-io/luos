import { useEffect, useRef } from 'react';

export const useInterval = (callback: Function, delay: number | null = 4000) => {
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
      let intervalId = setInterval(tick, delay);
      return () => clearInterval(intervalId);
    }

    return () => {};
  }, [delay]);
};
export default useInterval;
