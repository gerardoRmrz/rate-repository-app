import { View, Text, StyleSheet } from "react-native";
import { Link } from "react-router-native";
import Constants from "expo-constants";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#1E1A4D",
    height: 70,
    justifyContent: "center",
  },
  text: {
    color: "#F8FAFC",
    fontSize: 20,
    fontWeight: "bold",
  },
  // ...
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <Link to="/">
        <Text style={styles.text}>Repositories</Text>
      </Link>
      <Link to="/signin">
        <Text style={styles.text}>Sign In</Text>
      </Link>
    </View>
  );
};

export default AppBar;
