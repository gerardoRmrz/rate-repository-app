import { useQuery } from "@apollo/client/react";

import { GET_REPOSITORIES } from "../graphql/queries";

const useGraphQL = () => {
  const { data, error, loading } = useQuery(GET_REPOSITORIES);
  /*  console.log(data); */
  return { data, error, loading };
};

export default useGraphQL;
