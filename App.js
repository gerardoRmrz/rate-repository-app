import { useState } from "react";
import { ApolloProvider } from "@apollo/client/react";
import { StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NativeRouter } from "react-router-native";
import Main from "./src/components/Main";
import createApolloClient from "./src/utils/apolloClient";

import AuthStorage from "./src/utils/authStorage";
import AuthStorageContext from "./src/contexts/AuthStorageContext";
import { OrderingProvider } from "./src/contexts/OrderingContext";

const authStorage = new AuthStorage();
const apolloClient = createApolloClient(authStorage);
export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle={"auto"} hidden={false} />
      <NativeRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
        r
      >
        <ApolloProvider client={apolloClient}>
          <AuthStorageContext.Provider value={authStorage}>
            <OrderingProvider>
              <Main />
            </OrderingProvider>
          </AuthStorageContext.Provider>
        </ApolloProvider>
      </NativeRouter>
    </SafeAreaProvider>
  );
}
