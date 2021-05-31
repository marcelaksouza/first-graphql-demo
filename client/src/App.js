import React from "react";
// components
import BooksList from "./components/BooksList";
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
      return alert(`Graphql error ${message}`);
    });
  }
});

const link = from([
  errorLink,
  new HttpLink({
    uri: "http://localhost:4000/graphql",
    credentials: "same-origin",
  }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="font-nunito bg-gray-100 h-screen grid grid-cols-1 sm:grid-cols-2">
        <div className=" ">
          <h1 className="p-4 text-2xl flex justify-center text-gray-800 box-border">
            Reading list
          </h1>
          <BooksList />
          <AddBookForm />
        </div>
        <div className="bg-pink-800">
        <h1 className="p-4 text-2xl flex justify-center text-white box-border">
            Book Details
        </h1>

        </div>
      </div>
     
    </ApolloProvider>
  );
}

export default App;
