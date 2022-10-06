import React from "react";
import fetch from "cross-fetch";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  HttpLink,
} from "@apollo/client";

export const ApolloProvider = ({ element }) => {
  const client = new ApolloClient({
    link: new HttpLink({
      uri: url,
      fetch,
    }),
    cache: new InMemoryCache(),
  });
  <ApolloProvider client={client}>{element}</ApolloProvider>;
};
