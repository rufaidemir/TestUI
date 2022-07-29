import { ApolloClient, InMemoryCache } from '@apollo/client';


const cache = new InMemoryCache({
  
  // typePolicies: {
  //   Query: {
  //     fields: {
  //     }
  //   }
  // }
})


const client = new ApolloClient({
    uri: 'http://localhost:2500/',
    cache: cache,
    defaultOptions: {
      query: {
        fetchPolicy: 'network-only',
        errorPolicy: 'all'
      }
    }

});

export default client;