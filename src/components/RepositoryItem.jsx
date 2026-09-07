import { View, Image, StyleSheet, Pressable } from "react-native";
import { openURL } from "expo-linking";
import Text from "./Text";
import StatsLabel from "./StatsLabel";

import theme from "../theme";
const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: "#F5F3FF",
    borderRadius: 5,
    margin: 2,
    padding: 4,
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginBottom: 7,
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  statsItem: {
    alignItems: "center",
  },
  image: {
    width: 40,
    height: 40,
    marginRight: 13,
  },
  language: {
    backgroundColor: "blue",
    color: "white",
    padding: 3,
    alignSelf: "baseline",
    borderRadius: 5,
    marginTop: 5,
  },
  textBold: {
    fontWeight: "500",
  },
  textGray: {
    color: "#57534D",
  },
  wrapText: {
    flex: 1,
    flexWrap: "wrap",
    marginTop: 5,
  },
});

const RepositoryItem = ({ item, single }) => {
  const handlePress = (url) => {
    openURL(url);
  };

  return (
    <View testID="repository-item" style={styles.itemContainer}>
      <View style={styles.infoContainer}>
        <Image
          testID="repository-image"
          style={styles.image}
          source={{ uri: item.ownerAvatarUrl }}
        />
        <View>
          <Text testID="repository-fullname" fontWeight={"bold"}>
            {item.fullName}
          </Text>
          <Text testID="repository-description" style={styles.wrapText}>
            {item.description}
          </Text>
          <Text testID="repository-language" style={styles.language}>
            {item.language}
          </Text>
        </View>
      </View>
      <View style={styles.statsContainer}>
        <StatsLabel name={"Stars"} value={item.stargazersCount} />
        <StatsLabel name={"Forks"} value={item.forksCount} />
        <StatsLabel name={"Reviews"} value={item.reviewCount} />
        <StatsLabel name={"Rating"} value={item.ratingAverage} />
      </View>
      {single ? (
        <Pressable
          onPress={() => handlePress(item.url)}
          style={({ pressed }) => [
            pressed ? theme.pressablePressed : theme.pressableNormal,
            theme.button,
          ]}
        >
          <Text
            style={{
              color: theme.colors.textLabel,
              fontWeight: "bold",
              fontSize: 18,
            }}
          >
            Open in Github
          </Text>
        </Pressable>
      ) : null}
    </View>
  );
};

export default RepositoryItem;
