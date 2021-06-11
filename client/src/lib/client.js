import {
    ApolloClient,
    InMemoryCache,
    HttpLink,
    from,
  } from '@apollo/client';
  import { onError } from '@apollo/client/link/error';
  
  const errorLink = onError(({ graphqlErrors, networkError }) => {
    if (graphqlErrors) {
      graphqlErrors.map(({ message, location, path }) => {
        return alert(`Graphql error ${message}`);
      });
    }
  });
  
  const getLink = () => {
    return new HttpLink({
      uri: 'http://localhost:4000/graphql',
    });
  };
    
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: from([errorLink, getLink()]),
  });

  export default client;