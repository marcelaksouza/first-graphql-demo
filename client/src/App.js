// todo
// Delete book = backend done
// Add author
// Add genre
// Update book details

import React, { useState } from 'react';
// components
import BooksList from './components/BooksList';
import AddBookForm from './components/AddBookForm';
import BookDetails from './components/BookDetails';
import DeleteBook from './components/DeleteBook';
import UpdateBook from './components/UpdateBook';
import client from './lib/client';
import {ApolloProvider} from '@apollo/client';

function App() {
  const [selectedBook, setSelectedBook] = useState(null);

  const handleClick = (event) => {
    setSelectedBook(event.target.id);
  };

  // const selectBookFunc = () => {
  //   if (selectedBook) {
  //     return (
  //       <div>
  //         <BookDetails bookId={selectedBook} />
  //         <DeleteBook />
  //         <UpdateBook />
  //       </div>
  //     );
  //   } else {
  //     return <p className="p-4 text-white text-xl">Select a book...</p>;
  //   }
  // };

  return (
    <ApolloProvider client={client}>
      <div className="font-nunito bg-gray-100 h-screen grid grid-cols-1 sm:grid-cols-2">
        <div className=" ">
          <h1 className="p-4 text-2xl flex justify-center text-gray-800 box-border">
            Reading list
          </h1>
          <BooksList handleClick={handleClick} />
          <AddBookForm />
        </div>

        <div className="bg-pink-800 ">
          <h1 className="p-4 text-2xl flex justify-center text-white">
            Book Details
          </h1>

          {selectedBook && <BookDetails bookId={selectedBook} />}
          {!selectedBook && (
            <p className="p-4 text-white text-xl">Select a book...</p>
          )}
          <div className="flex flex-row justify-center">
            {selectedBook && <UpdateBook />}
            {selectedBook && <DeleteBook />}
          </div>
        </div>
      </div>
    </ApolloProvider>
  );
}

export default App;
