import React from "react";
import fetch from "cross-fetch";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  HttpLink,
} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
export const wrapRootElement = ({ element }, { url }) => {
  // Add error handling if no URL passed.
  if (!url) {
    return null;
  }

  const client = new ApolloClient({
    uri: url,
    cache: new InMemoryCache(),
    link: createUploadLink({
      uri: url,
      fetch,
    }),
  });

  return <ApolloProvider client={client}>{element}</ApolloProvider>;
};
