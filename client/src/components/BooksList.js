import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_BOOKS } from "../lib/queries/queries";
import Book from "./Book";

const BookList = () => {
  const { loading, data } = useQuery(GET_BOOKS,{
    // pollInterval: 2000
  });

  const displayBooks = () => {
    if (loading) return <option disabled>Loading Books</option>;
    else {
      return data && data.books.map((book) => {
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
