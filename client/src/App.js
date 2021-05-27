import React from "react";
// components
import BookList from "./components/BookList";
import AddBookForm from "./components/AddBookForm";

// Apollo
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";

const errorLink = onError(({ graphqlErrors, networkError }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) => {
      alert(`Graphql error ${message}`);
    });
  }
});

const link = from([
  errorLink,
  new HttpLink({ 
    uri: "http://localhost:4000/graphql",
    credentials: 'same-origin' })
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});


function App() {
  return (
    <ApolloProvider client={client}>
      <div className="bg-gray-200 h-screen w-screen font-nunito">
        <h1>Ninja reading list</h1>
        <BookList />
        <AddBookForm />
      </div>
    </ApolloProvider>
  );
}

export default App;
