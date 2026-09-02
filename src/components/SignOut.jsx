import { Navigate } from "react-router-native";
import AuthStorage from "../utils/authStorage";
import { useApolloClient } from "@apollo/client/react";

const userToken = new AuthStorage();

const SignOut = () => {
  const apolloClient = useApolloClient();

  userToken.removeAccessToken();
  apolloClient.resetStore();
  return <Navigate to={"/"} replace />;
};

export default SignOut;
