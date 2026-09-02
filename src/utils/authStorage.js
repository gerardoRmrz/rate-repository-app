import AsyncStorage from "@react-native-async-storage/async-storage";

class AuthStorage {
  constructor(namespace = "auth") {
    this.namespace = namespace;
  }

  async getAccessToken() {
    try {
      const accessToken = await AsyncStorage.getItem(
        `${this.namespace}:accessToken`,
      );

      if (accessToken !== "undefined") {
        return accessToken ? JSON.parse(accessToken) : {};
      } else {
        console.log("No data found for this token");
        return null;
      }
    } catch (err) {
      console.error("Error reading string data: ", err);
    }
  }

  async setAccessToken(accessToken) {
    await AsyncStorage.setItem(
      `${this.namespace}:accessToken`,
      JSON.stringify(accessToken),
    );
  }

  async removeAccessToken() {
    await AsyncStorage.removeItem(`${this.namespace}:accessToken`);
  }
}

export default AuthStorage;
