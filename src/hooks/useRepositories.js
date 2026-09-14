import { useQuery } from "@apollo/client/react";
import { useState, useEffect } from "react";
import { GET_REPOSITORIES } from "../graphql/queries";

const useRepositories = (variables) => {
  const { data, load, fetchMore, ...result } = useQuery(GET_REPOSITORIES, {
    variables,
  });

  const [repositories, setRepositories] = useState();
  const [loading, setLoading] = useState(false);

  const fetchRepositories = async () => {
    setLoading(true);
    const response = await fetch("http://192.168.0.27:5000/api/repositories");
    const json = await response.json();
    console.log("=======>>> ", json);

    setLoading(false);
    setRepositories(json);
  };

  useEffect(() => {
    fetchRepositories();
  }, []);

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        after: data.repositories.pageInfo.endCursor,
        ...variables,
      },
    });
  };

  return {
    repositories: data?.repositories,
    fetchMore: handleFetchMore,
    refetch: fetchRepositories,
    loading,
    ...result,
  };
};

export default useRepositories;
