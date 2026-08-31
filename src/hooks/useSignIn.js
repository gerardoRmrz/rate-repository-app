import { useMutation } from "@apollo/client/react";
import { SIGNIN } from "../graphql/mutations";

const useSignIn = () => {
  const [mutate, result] = useMutation(SIGNIN);

  const signIn = async ({ username, password }) => {
    const credentials = { username, password };
    mutate({ variables: { credentials } });
  };
  return [signIn, result];
};

export default useSignIn;
