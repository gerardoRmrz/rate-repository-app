import AuthStorage from "../utils/authStorage";
import { useApolloClient } from "@apollo/client/react";
import { Navigate } from "react-router-native";
import SignInFormContainer from "./SignInFormContainer";

import useSignIn from "../hooks/useSignIn";

const userToken = new AuthStorage();

const SignInForm = () => {
  const [signIn, result] = useSignIn();
  const apolloClient = useApolloClient();

  const onSubmit = async (values) => {
    try {
      await signIn(values);
    } catch (e) {
      console.error(e);
    }
  };

  if (result.data) {
    userToken.setAccessToken(result.data?.authenticate?.accessToken);
    apolloClient.resetStore();
    return <Navigate to={"/"} replace />;
  } else {
    return <SignInFormContainer onSubmit={onSubmit} />;
  }
};

export default SignInForm;
