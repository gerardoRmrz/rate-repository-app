import { useQuery } from "@apollo/client/react";

import { GET_REPOSITORIES, GET_REPOSITORY_BY_ID, ME } from "../graphql/queries";

export const useGetAllRepositories = () => {
  const { data, error, loading } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: "cache-and-network",
  });
  return { data, error, loading };
};

export const useCurrentUser = () => {
  const { loading, error, data } = useQuery(ME);
  return { data, error, loading };
};

export const useGetRepositoriesById = (id) => {
  const { data, error, loading } = useQuery(GET_REPOSITORY_BY_ID, {
    variables: { repositoryId: id },
  });
  return { data, error, loading };
};
