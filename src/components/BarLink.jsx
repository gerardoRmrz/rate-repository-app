import { StyleSheet } from "react-native";
import { Link } from "react-router-native";
import Text from "./Text";

const styles = StyleSheet.create({
  text: {
    color: "#F8FAFC",
    fontSize: 18,
    fontWeight: "bold",
  },
  link: {
    margin: 5,
  },
});

const BarLink = ({ linkTo, label }) => {
  return (
    <Link to={linkTo} style={styles.link}>
      <Text style={styles.text}>{label}</Text>
    </Link>
  );
};

export default BarLink;
