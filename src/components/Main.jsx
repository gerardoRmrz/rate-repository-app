import { View } from "react-native";
import { Route, Routes, Navigate } from "react-router-native";
import theme from "../theme";

import AppBar from "./AppBar";
import RepositoryList from "./RepositoryList";
import SignIn from "./Signin";
import SignOut from "./SignOut";

const Main = () => {
  return (
    <View style={theme.container}>
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signout" element={<SignOut />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </View>
  );
};

export default Main;
