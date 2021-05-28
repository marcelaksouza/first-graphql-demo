import React, { useState } from "react";
import Label from "./Label";
import Imput from "./Imput";
import PlusButton from "./PlusButton";
import AuthorsList from "./AuthorsList";

const AddBookForm = () => {
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
  
  const clickHandler = (event) => {
    event.preventDefault()
    let newBook = {
      name:enteredBookName,
      genre:enteredBookGenre,
      authorId:enteredBookAuthor
    }
    console.log(newBook);
    setBookName("");
    setBookGenre("");
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
          <select onChange={authorChangeHandler}>
            <option>Select author</option>
            <AuthorsList/>
          </select>
        </div>

        <PlusButton clickHandler={clickHandler}/>
      </form>
  );
};

export default AddBookForm;
