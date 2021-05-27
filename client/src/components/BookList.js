import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_BOOKS } from "../lib/queries";
import Book from "./Book";

const BookList = () => {
  const {loading, data } = useQuery(GET_BOOKS);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    if (data) {
      setBooks(data.books);
    }
  }, [data]);

  if (loading) return <p>Loading ...</p>;

  return (
    <div>
      <ul>
        {books &&
          books.map((book) => (
            <Book 
            key={book.id} 
            name={book.name} 
            genre={book.genre} 
            />
          ))}
      </ul>
    </div>
  );
};

export default BookList;

