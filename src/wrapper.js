import React from "react";
import fetch from "cross-fetch";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
export const Apollowrapper = ({ element }) => {
  const client = new ApolloClient({
    uri: "https://wirehouse.sd-clients.com/graphql",
    cache: new InMemoryCache(),
    link: createUploadLink({
      uri: "https://wirehouse.sd-clients.com/graphql",
      fetch,
    }),
  });
  return <ApolloProvider client={client}>{element}</ApolloProvider>;
};
