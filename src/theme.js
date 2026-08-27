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
};

export default theme;
