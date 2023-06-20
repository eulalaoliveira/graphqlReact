import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Container from '../src/views/Container';

const client = new ApolloClient({
  uri: 'https://tmdb-one-blue.vercel.app/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Container />
    </ApolloProvider>
  );
}

export default App;
