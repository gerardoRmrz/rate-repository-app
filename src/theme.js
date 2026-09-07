import { Platform } from "react-native";

const theme = {
  container: {
    flex: 1,
  },
  colors: {
    textPrimary: "#24292e",
    textSecondary: "#586069",
    textLabel: "#F8FAFC",
    primary: "#0366d6",
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
    padding: 15,
    marginTop: 10,
    alignItems: "center",
    backgroundColor: "#0366d6",
    borderRadius: 10,
    zIndex: 999,
    color: "#F8FAFC",
  },
};

export default theme;
