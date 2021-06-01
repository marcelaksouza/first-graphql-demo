import React from "react";
import { useQuery } from "@apollo/client";
import { GET_BOOK } from "../lib/queries/queries";

const BookDetails = (props) => {
  
    const { loading, error, data } = useQuery(GET_BOOK, {
        variables: { id: props.bookId },
      })
  
    if (error) console.log(error);
    if (loading) return <p className="p-4 text-white text-xl">Loading ...</p>;
    
    return <div className="mx-2 p-2 rounded border border-gray-50 shadow text-white">
      <span className="block ">Name: {data.book.name}</span>
      <span className="block">Genre: {data.book.genre}</span>
      <span className="block pt-2">Author's name: {data.book.author.name}</span>
      <span className="block">Author's age: {data.book.author.age}</span>
      <span className="block px-6 pt-2">{data.book.author.books && "Authors books:"}</span>
      <ul className="list-disc px-8 ">
      {data.book.author.books.map((book)=>{
        return <li key={book.name.toString()}>{book.name}</li>
      })}
      </ul>
    </div>
  }
export default BookDetails;
