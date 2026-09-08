import { View, StyleSheet, ScrollView } from "react-native";
import Text from "./Text";
import Constants from "expo-constants";
import BarLink from "./BarLink";

import { useCurrentUser } from "../hooks/useQuery";

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

  if (error) return <Text>Error: {error.message}</Text>;
  if (loading) return <Text>...loading</Text>;

  return (
    <View style={styles.container}>
      <ScrollView horizontal contentContainerStyle={styles.scrollView}>
        <BarLink linkTo={"/"} label={"Repositories"} />
        {data?.me ? (
          <View style={{ flexDirection: "row" }}>
            <BarLink linkTo={"/newreview"} label={"Create a review"} />
            <BarLink linkTo={"/signout"} label={"Sign Out"} />
          </View>
        ) : (
          <BarLink linkTo={"/signin"} label={"Sign In"} />
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;
