import { CREATE_USER } from "../graphql/mutations";
import { useMutation } from "@apollo/client/react";

export const useCreateUser = () => {
  const [mutate, result] = useMutation(CREATE_USER, {
    onCompleted: (data) => {
      console.log("New user added to DB: ");
    },
    onError: (err) => {
      console.error("Create new user failed: ", err.message);
    },
  });

  const createUser = async (user) => {
    await mutate({ variables: { user } });
  };

  return [createUser, result];
};
