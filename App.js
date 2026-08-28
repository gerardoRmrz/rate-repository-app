import { ApolloProvider } from "@apollo/client/react";
import { StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NativeRouter } from "react-router-native";

/*import { StyleSheet, Text, View } from 'react-native'; */
import Main from "./src/components/Main";
import createApolloClient from "./src/utils/apolloClient";

const apolloClient = createApolloClient();

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle={"light-content"} />
      <NativeRouter>
        <ApolloProvider client={apolloClient}>
          <Main />
        </ApolloProvider>
      </NativeRouter>
    </SafeAreaProvider>
  );
}
