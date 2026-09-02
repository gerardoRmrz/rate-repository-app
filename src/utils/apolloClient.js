import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { GraphQL17Alpha9Handler } from "@apollo/client/incremental";
import { SetContextLink } from "@apollo/client/link/context";

const httpLink = new HttpLink({
  uri: process.env.EXPO_PUBLIC_APOLLO_URI,
});

const createApolloClient = (authStorage) => {
  const authLink = new SetContextLink(async ({ headers }) => {
    try {
      const accessToken = await authStorage.getAccessToken();
      return {
        headers: {
          ...headers,
          authorization: accessToken ? `Bearer ${accessToken}` : "",
        },
      };
    } catch (e) {
      console.error("Error: ", e);
      return {
        headers,
      };
    }
  });

  return new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
    incrementalHandler: new GraphQL17Alpha9Handler(),
  });
};

export default createApolloClient;
