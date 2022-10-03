import { createContext, ReactElement, useState, useCallback } from 'react';
import { SDK } from '@luos-io/sdk-web';

export type SDKContextType = {
  sdk: SDK;
};
export const SDKContext = createContext<SDKContextType>({
  sdk: new SDK(),
});

type SDKProviderProps = {
  children: ReactElement;
};
interface ISDKProvider {
  (props: SDKProviderProps): ReactElement;
}
export const SDKProvider: ISDKProvider = ({ children }) => {
  const [sdk, setSDK] = useState(new SDK());

  useCallback((sdk: SDK) => setSDK(sdk), []);

  return <SDKContext.Provider value={{ sdk }}>{children}</SDKContext.Provider>;
};
export default SDKProvider;
