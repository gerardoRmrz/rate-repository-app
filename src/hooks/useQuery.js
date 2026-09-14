import { useQuery } from "@apollo/client/react";

import { GET_REPOSITORIES, GET_REPOSITORY_BY_ID, ME } from "../graphql/queries";

export const useGetAllRepositories = ({ type, direction, searchKeyword }) => {
  const variables = {
    orderBy: type,
    orderDirection: direction,
    searchKeyword: searchKeyword,
    first: 5,
  };

  const { data, loading, fetchMore, error, ...result } = useQuery(
    GET_REPOSITORIES,
    {
      variables,
    },
  );

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage;
    if (!canFetchMore) {
      return;
    }
    console.log("******************* ", data.repositories.pageInfo.endCursor);
    fetchMore({
      variables: {
        after: data.repositories.pageInfo.endCursor,
        ...variables,
      },
    });
  };

  return {
    data,
    fetchMore: handleFetchMore,
    loading,
    error,
    ...result,
  };
};

export const useGetFilteredRepositories = (searchKeyword) => {
  const { loading, error, data } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: "cache-and-network",
    variables: { searchKeyword: searchKeyword },
  });

  return { data, error, loading };
};

export const useCurrentUser = () => {
  const variables = { includeReviews: true, first: 4 };

  const { data, loading, fetchMore, error, ...result } = useQuery(ME, {
    variables,
  });

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.me.reviews.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        after: data.me.reviews.pageInfo.endCursor,
        ...variables,
      },
    });
  };

  return { data, error, loading, fetchMore: handleFetchMore };
};

export const useGetRepositoriesById = (id) => {
  const variables = { repositoryId: id, first: 2, includeReviews: true };

  const { data, loading, fetchMore, error, ...result } = useQuery(
    GET_REPOSITORY_BY_ID,
    {
      variables,
    },
  );

  const handleFetchMore = () => {
    const canFetchMore =
      !loading && data?.repository.reviews.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        after: data.repository.reviews.pageInfo.endCursor,
        ...variables,
      },
    });
  };

  return { data, error, loading, fetchMore: handleFetchMore };
};
