import { ApolloProvider } from "@apollo/client/react";
import { StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NativeRouter } from "react-router-native";
import Main from "./src/components/Main";
import createApolloClient from "./src/utils/apolloClient";

import AuthStorage from "./src/utils/authStorage";
import AuthStorageContext from "./src/contexts/AuthStorageContext";

const authStorage = new AuthStorage();
const apolloClient = createApolloClient(authStorage);
export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle={"light-content"} />
      <NativeRouter>
        <ApolloProvider client={apolloClient}>
          <AuthStorageContext.Provider value={authStorage}>
            <Main />
          </AuthStorageContext.Provider>
        </ApolloProvider>
      </NativeRouter>
    </SafeAreaProvider>
  );
}
