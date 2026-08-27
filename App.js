import { StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NativeRouter } from "react-router-native";

/*import { StyleSheet, Text, View } from 'react-native'; */
import Main from "./src/components/Main";

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle={"light-content"} />
      <NativeRouter>
        <Main />
      </NativeRouter>
    </SafeAreaProvider>
  );
}
