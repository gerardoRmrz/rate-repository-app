import { View } from "react-native";
import Text from "./Text";

const styles = {
  statsItem: {
    alignItems: "center",
  },
  textGray: {
    color: "#57534D",
  },
};

const formatCount = (count) => {
  const numCount = Number(count);
  if (Math.round(numCount / 1000) > 0) {
    return `${Math.round(numCount / 100) / 10}k`;
  } else {
    return `${numCount}`;
  }
};

const StatsLabel = ({ name, value }) => {
  return (
    <View style={styles.statsItem}>
      <Text fontWeight={"bold"}>{formatCount(value)}</Text>
      <Text style={styles.textGray}>{name}</Text>
    </View>
  );
};

export default StatsLabel;
