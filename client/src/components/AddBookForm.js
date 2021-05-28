import React, { useState } from "react";
import Label from "./Label";
import Imput from "./Imput";
import PlusButton from "./PlusButton";
import AuthorsList from "./AuthorsList";
import { ADD_BOOK } from "../lib/queries/mutation";
import { gql, useMutation } from '@apollo/client';
import { GET_BOOKS } from "../lib/queries/queries";


const AddBookForm = () => {
  const [addBook, {data}] = useMutation(ADD_BOOK);

  const [enteredBookName, setBookName] = useState("");
  const [enteredBookGenre, setBookGenre] = useState("");
  const [enteredBookAuthor, setBookAuthor] = useState("");

  const nameChangeHandler = (event) => {
    setBookName(event.target.value);
  };

  const genreChangeHandler = (event) => {
    setBookGenre(event.target.value);
  };

  const authorChangeHandler = (event) => {
    setBookAuthor(event.target.value);
  };
  
  const clickHandler = async (event) => {
    event.preventDefault()
    let newBook = {
      name:enteredBookName,
      genre:enteredBookGenre,
      authorId:enteredBookAuthor
    }
    try {
      const result = await addBook({variables: newBook, refetchQueries:[{query:GET_BOOKS}] })  
      console.log(result)
    } catch (error) {
      console.log(error)
    }
    setBookName("");
    setBookGenre("");
    // how to set to the default value? 
    setBookAuthor("");
  }

  return (
      <form id="add-book">
        <div className="field">
          <Label name="Book Name:" />
          <Imput value={enteredBookName} inputHandler={nameChangeHandler}/>
        </div>
        <div className="field">
          <Label name="Genre:" />
          <Imput value={enteredBookGenre} inputHandler={genreChangeHandler}/>
        </div>
        <div className="field">
          <Label name="Author:" />
          <select onChange={authorChangeHandler} value={enteredBookAuthor}>
            <option>Select author</option>
            <AuthorsList/>
          </select>
        </div>

        <PlusButton clickHandler={clickHandler}/>
      </form>
  );
};

export default AddBookForm;
