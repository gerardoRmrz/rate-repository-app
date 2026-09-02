import { View, StyleSheet, ScrollView } from "react-native";
import Constants from "expo-constants";
import BarLink from "./BarLink";

import { useCurrentUser } from "../hooks/useQuery";
import AuthStorage from "../utils/authStorage";

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
});

const AppBar = () => {
  const { data, error, loading } = useCurrentUser();

  if (error) return <p>{error.message}</p>;
  if (loading) return <p>...loading</p>;

  return (
    <View style={styles.container}>
      <ScrollView horizontal contentContainerStyle={styles.scrollView}>
        <BarLink linkTo={"/"} label={"Repositories"} />
        {data?.me ? (
          <BarLink linkTo={"/signout"} label={"Sign Out"} />
        ) : (
          <BarLink linkTo={"/signin"} label={"Sign In"} />
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;
