import React from "react";
import { useQuery } from "@apollo/client";
import { GET_BOOK } from "../lib/queries/queries";
import BookDetailsModal from "./BookDetailsModal"

const BookDetails = (props) => {
  
    const { loading, error, data } = useQuery(GET_BOOK, {
        variables: { id: props.bookId },
      })
  
    if (error) return `Error! ${error}`;
    if (loading) return <p>Loading ...</p>;
    
    return <BookDetailsModal bookDetails={data.book}/>;
  }
export default BookDetails;
