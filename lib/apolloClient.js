import {
  ApolloClient,
  HttpLink,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";

const client = createApolloClient();

function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === true,
    link: new HttpLink({
      uri: "https://graphql-pokeapi.vercel.app/api/graphql",
    }),
    cache: new InMemoryCache(),
  });
}

export const Provider = ({ children }) => (
  <ApolloProvider client={client}>{children}</ApolloProvider>
);
