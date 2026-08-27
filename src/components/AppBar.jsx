import { View, StyleSheet, ScrollView } from "react-native";
import Text from "./Text";
import { Link } from "react-router-native";
import Constants from "expo-constants";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#1E1A4D",
    height: 90,
  },
  text: {
    color: "#F8FAFC",
    fontSize: 18,
    fontWeight: "bold",
  },
  scrollView: {
    alignItems: "center",
  },
  link: {
    margin: 5,
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal contentContainerStyle={styles.scrollView}>
        <Link to="/" style={styles.link}>
          <Text style={styles.text}>Repositories</Text>
        </Link>
        <Link to="/signin" style={styles.link}>
          <Text style={styles.text}>Sign In</Text>
        </Link>
      </ScrollView>
    </View>
  );
};

export default AppBar;
