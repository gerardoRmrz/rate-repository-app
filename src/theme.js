import { Platform } from "react-native";

const primaryColor = "#0366d6";
const ratingContainerSize = 55;

const theme = {
  container: {
    flex: 1,
  },
  colors: {
    textPrimary: "#24292e",
    textSecondary: "#586069",
    textLabel: "#F8FAFC",
    primary: primaryColor,
  },
  fontSizes: {
    body: 14,
    subheading: 16,
  },
  fonts: {
    main:
      Platform.OS === "android"
        ? "Copperplate"
        : Platform.OS === "ios"
          ? "Arial"
          : Platform.OS === "web"
            ? "Garamond"
            : "System",
  },
  fontWeights: {
    normal: "400",
    bold: "700",
  },
  separator: {
    height: 10,
  },
  pressablePressed: {
    transform: [{ scale: 0.98 }],
  },
  pressableNormal: {
    transform: [{ scale: 1 }],
  },
  button: {
    padding: 5,
    margin: 10,
    alignItems: "center",
    backgroundColor: "#0366d6",
    borderRadius: 10,
    zIndex: 999,
    color: "#F8FAFC",
  },
  buttonLabel: {
    fontSize: 20,
    color: "#F5F3FF",
  },
  itemContainer: {
    backgroundColor: "#F5F3FF",
    borderRadius: 5,
    margin: 2,
    padding: 4,
  },
  singleViewHeading: {
    flexDirection: "row",
    alignItems: "center",
  },
  singleViewUserName: {
    fontWeight: "700",
  },
  singleViewRating: {
    alignItems: "center",
    justifyContent: "center",
    marginRight: 8,
    marginLeft: 10,
    marginBottom: 5,
    borderColor: primaryColor,
    borderWidth: 2,
    borderRadius: ratingContainerSize / 2,
    width: ratingContainerSize,
    height: ratingContainerSize,
  },
  singleViewTextRating: {
    fontSize: 24,
    color: primaryColor,
  },
  singleViewTextReview: {
    padding: 2,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  error: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    borderColor: "red",
  },
  validationError: {
    color: "red",
    paddingLeft: 12,
  },
};

export default theme;
