import React from "react";
import { useMutation } from "@apollo/client";
import { DELETE_BOOK } from "../lib/queries/mutation";
import { GET_BOOKS } from "../lib/queries/queries";

const DeleteBookButton = (props) => {
  const [deleteBook, { loading, error }] = useMutation(DELETE_BOOK);

  if (error) console.log(error);
  if (loading)
    return <p className="p-4 text-white text-xl">Sending request ...</p>;

  const deleteBookFunc = async (e) => {
    e.preventDefault();
    try {
      await deleteBook({
        variables: { id: props.bookId },
        refetchQueries: [{ query: GET_BOOKS }],
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-4">
      <button
        className="shadow border font-bold bg-white border-pink-300 text-pink-500 hover:border-pink-500 hover:boder-2 focus:border-pink-500 py-2 px-4 rounded"
        onClick={deleteBookFunc}
      >
        Delete Book{" "}
      </button>
    </div>
  );
};

export default DeleteBookButton;
