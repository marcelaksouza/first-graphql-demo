import React from "react";
import { useQuery } from "@apollo/client";
import { GET_BOOK } from "../lib/queries/queries";

const BookDetails = (props) => {
  console.log(props)
    const { loading, error, data } = useQuery(GET_BOOK, {
        variables: { id: props.bookId },
      })
  
    if (error) return `Error! ${error}`;
    if (loading) return <p>Loading ...</p>;
    
    return <div>
      {data.book.name}
    </div>
  }
export default BookDetails;
