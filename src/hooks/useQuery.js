import { useQuery } from "@apollo/client/react";

import { GET_REPOSITORIES, ME } from "../graphql/queries";

export const useGraphQL = () => {
  const { data, error, loading } = useQuery(GET_REPOSITORIES);
  return { data, error, loading };
};

export const useCurrentUser = () => {
  const { loading, error, data } = useQuery(ME);
  return { data, error, loading };
};
