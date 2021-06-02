import React from "react";
import { useQuery } from "@apollo/client";
import { GET_BOOKS } from "../lib/queries/queries";
import Book from "./Book";

const BookList = (props) => {
  const { loading, data } = useQuery(GET_BOOKS, {
    // pollInterval: 2000
  });

  const displayBooks = () => {
    if (loading) return <option disabled>Loading Books</option>;
    else {
      return (
        data &&
        data.books.map((book) => {
          return (
            <Book
              handleClick={props.handleClick}
              key={book.id}
              name={book.name}
              genre={book.genre}
              id={book.id}
            />
          );
        })
      );
    }
  };

  return (
    <div className="">
      <ul className="">{displayBooks()}</ul>
    </div>
  );
};

export default BookList;
