import React,{useState} from "react";
import { useQuery } from "@apollo/client";
import { GET_BOOKS } from "../lib/queries/queries";
import Book from "./Book";
import BookDetails from "./BookDetails"

const BookList = () => {
  const { loading, data } = useQuery(GET_BOOKS,{
    // pollInterval: 2000
  });
  const [selectedBook, setBook] = useState(null);

  const handleClick = (event) => {
    setBook(event.target.id);
  }

  const displayBooks = () => {
    if (loading) return <option disabled>Loading Books</option>;
    else {
      return data && data.books.map((book) => {
        return <Book handleClick={handleClick} key={book.id} name={book.name} genre={book.genre} id={book.id}/>
      });
    }
  };

  return (

    <div className="">
      <ul className="">
        {displayBooks()}
      </ul>
      {selectedBook && <BookDetails bookId={selectedBook}/>}
    </div>
  );
};

export default BookList;
