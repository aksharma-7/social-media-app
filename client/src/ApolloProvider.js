import React from 'react';
import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client';
import App from './App';

const httpLink = createHttpLink({
  uri: 'http://localhost:5000/',
});

const authLink = new ApolloLink((operation, forward) => {
  operation.setContext(() => {
    const token = localStorage.getItem('jwtToken');
    return {
      headers: {
        Authorization: token ? `Bearer ${token}` : '',
      },
    };
  });
  return forward(operation);
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
