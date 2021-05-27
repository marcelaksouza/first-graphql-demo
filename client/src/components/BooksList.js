import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_BOOKS } from "../lib/queries";
import Book from "./Book";

const BookList = () => {
  const { loading, data } = useQuery(GET_BOOKS);
  const [booksList, setBooks] = useState([]);

  useEffect(() => {
    if (data) {
      setBooks(data.books);
    }
  }, [data]);

  const displayBooks = () => {
    if (loading) return <option disabled>Loading Books</option>;
    else {
      return booksList.map((book) => {
        return <Book key={book.id} name={book.name} genre={book.genre} />;
      });
    }
  };

  return (
    <div>
      <ul>{displayBooks()}</ul>
    </div>
  );
};

export default BookList;
