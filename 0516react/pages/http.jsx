import { QueryClient, QueryClientProvider } from "react-query";
import { AxiosExample } from "../components/axiosExample";
import { FetchExample } from "../components/fetchExample";
import { ReactQueryExample } from "../components/reactQuery";
import { GraphQLExample } from "../components/graphql";
import { ApolloProvider } from "@apollo/client";
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

export function Http() {
  const queryClient = new QueryClient();

  // [1]
  const httpLink = new HttpLink({
    uri: "https://countries.trevorblades.com/",
  });
  // [2]
  const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
  });
  console.log("1 ", httpLink);
  console.log("2 ", client);
  return (
    <>
      {/* <p>REST API</p> */}
      {/* <FetchExample /> */}
      {/* <AxiosExample /> */}
      {/* <QueryClientProvider client={queryClient}>
        <ReactQuery />
      </QueryClientProvider> */}
      <p>GraphQL</p>
      <ApolloProvider client={client}>
        <GraphQLExample />
      </ApolloProvider>
    </>
  );
}
