import { FC, PropsWithChildren } from "react";
import { store } from "@/store";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";

export const Providers: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>{children}</SafeAreaProvider>
    </Provider>
  );
};
