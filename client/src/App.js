// todo
// Implement: Add author
// Implement: Add genre
// Implement: Update book details
// fix: Add book is with a bug
// clear data when data is deleted - usestate maybe?

import React, { useState } from "react";
// components
import BooksList from "./components/BooksList";
import AddBookForm from "./components/AddBookForm";
import BookDetails from "./components/BookDetails";
import DeleteBookButton from "./components/DeleteBookButton";
import UpdateBookButton from "./components/UpdateBookButton";
import client from "./lib/client";
import { ApolloProvider } from "@apollo/client";

function App() {
  const [selectedBook, setSelectedBook] = useState({ data: null });

  const handleClick = (data) => {
    setSelectedBook({ data: data });
  };

  return (
    <ApolloProvider client={client}>
      {/* Books list */}
      <div className="font-nunito bg-gray-100 h-screen grid grid-cols-1 sm:grid-cols-2">
        <div className=" ">
          <h1 className="p-4 text-2xl flex justify-center text-gray-800 box-border">
            Reading list
          </h1>
          <BooksList handleClick={handleClick} />

          {/* Add book form */}
          <div>
            <AddBookForm />
          </div>
        </div>

        {/* Book details */}
        <div className="bg-pink-800 ">
          <h1 className="p-4 text-2xl flex justify-center text-white">
            Book Details
          </h1>

          {selectedBook.data && <BookDetails bookId={selectedBook.data.id} />}
          {!selectedBook.data && (
            <p className="p-4 text-white text-xl">Select a book...</p>
          )}

          {/* buttons */}
          <div className="flex flex-row justify-center">
            {selectedBook.data && (
              <UpdateBookButton bookId={selectedBook.data.id} />
            )}
            {selectedBook.data && (
              <DeleteBookButton bookId={selectedBook.data.id} setDataNull={handleClick}/>
            )}
          </div>
        </div>
      </div>
    </ApolloProvider>
  );
}

export default App;
