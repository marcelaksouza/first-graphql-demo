import React, { useState } from "react";
import Label from "./form/Label";
import Imput from "./form/Imput";
import PlusButton from "./PlusButton";
import AuthorsList from "./form/AuthorsList";
import { ADD_BOOK } from "../lib/queries/mutation";
import { useMutation } from '@apollo/client';
import { GET_BOOKS } from "../lib/queries/queries";
import DropDownOptions from "./form/DropDownOptions"

const AddBookForm = () => {
  // eslint-disable-next-line
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
      await addBook({variables: newBook, refetchQueries:[{query:GET_BOOKS}] })
    } catch (error) {
      console.log(error)
    }
    setBookName("");
    setBookGenre("Select Genre");
    setBookAuthor("Select Author");
  }

  return (
      <form className="md:absolute md:bottom-0 md:left-0 md:w-1/2 lg:w-1/2 p-2 shadow bg-white border border-pink-200">
        <div className="p-2 grid grid-cols-2 gap-4">
          <Label className=" " name="Book Name:" />
          <Imput className=" " value={enteredBookName} inputHandler={nameChangeHandler}/>
        </div>
        <div className="p-2 grid grid-cols-2 gap-4">
          <Label name="Genre:" />
          <select onChange={genreChangeHandler} value={enteredBookGenre}>
            <option>Select genre</option>
            <DropDownOptions genres={["Fantasy","Sci-fi"]}/>
          </select>
          
          {/* <Imput value={enteredBookGenre} inputHandler={genreChangeHandler}/> */}
        </div>
        <div className="p-2 grid grid-cols-2 gap-4">
          <Label name="Author:" />
          <select onChange={authorChangeHandler} value={enteredBookAuthor}>
            <option>Select author</option>
            <AuthorsList/>
          </select>
        </div>
        <div className="p-2">
          <PlusButton clickHandler={clickHandler}/>
        </div>
        
      </form>
  );
};

export default AddBookForm;
