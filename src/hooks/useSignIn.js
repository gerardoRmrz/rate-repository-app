import { useMutation } from "@apollo/client/react";
import { SIGNIN } from "../graphql/mutations";

const useSignIn = () => {
  const [mutate, result] = useMutation(SIGNIN, {
    onCompleted: (data) => {
      console.log("User signIn successfully");
    },
    onError: (err) => {
      console.error("Mutation error: ", err.message);
    },
  });

  const signIn = async ({ username, password }) => {
    const credentials = { username, password };
    await mutate({
      variables: { credentials },
    });
  };

  return [signIn, result];
};

export default useSignIn;
