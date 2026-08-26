import { View, Text, Image, StyleSheet } from "react-native";

/* id: string;
    fullName: string;
    description: string;
    language: string;
    forksCount: number;
    stargazersCount: number;
    ratingAverage: number;
    reviewCount: number;
    ownerAvatarUrl: string;
 */
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
});

const RepositoryItem = ({ item }) => {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.infoContainer}>
        <Image style={styles.image} source={{ uri: item.ownerAvatarUrl }} />
        <View>
          <Text style={styles.textBold}>{item.fullName}</Text>
          <Text style={{ flex: 1, flexWrap: "wrap", marginTop: 5 }}>
            {item.description}
          </Text>
          <Text style={styles.language}>{item.language}</Text>
        </View>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statsItem}>
          <Text style={styles.textBold}>{item.stargazersCount}</Text>
          <Text style={styles.textGray}>Stars</Text>
        </View>
        <View style={styles.statsItem}>
          <Text style={styles.textBold}>{item.forksCount}</Text>
          <Text style={styles.textGray}>Forks</Text>
        </View>
        <View style={styles.statsItem}>
          <Text style={styles.textBold}>{item.reviewCount}</Text>
          <Text style={styles.textGray}>Reviews</Text>
        </View>
        <View style={styles.statsItem}>
          <Text style={styles.textBold}>{item.ratingAverage}</Text>
          <Text style={styles.textGray}>Rating</Text>
        </View>
      </View>
    </View>
  );
};

export default RepositoryItem;
