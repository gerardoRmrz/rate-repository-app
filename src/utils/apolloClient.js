import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { GraphQL17Alpha9Handler } from "@apollo/client/incremental";

const httpLink = new HttpLink({
  uri: "http://192.168.1.100:4000/graphql",
});

const createApolloClient = () => {
  return new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
    incrementalHandler: new GraphQL17Alpha9Handler(),
  });
};

export default createApolloClient;
