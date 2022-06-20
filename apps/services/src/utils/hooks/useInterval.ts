import * as React from 'react';

type TCallback = (time?: number) => void;

export const useInterval = (callback: TCallback, timeout: number) => {
  const savedCallback = React.useRef(callback);

  const handler = React.useCallback(() => savedCallback.current(new Date().getTime()), []);

  // Store latest callback
  React.useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up/teardown the interval
  React.useEffect(() => {
    if (timeout) {
      const id = window.setInterval(handler, timeout);
      return () => window.clearInterval(id);
    }
  }, [handler, timeout]);
};

export default useInterval;
