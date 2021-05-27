import React from "react";
import Label from "./Label";
import Imput from "./Imput";
import AuthorsList from "./AuthorsList";

const AddBookForm = () => {
  return (
    <form id="add-book">
      <div className="field">
        <Label name="Book Name:" />
        <Imput />
      </div>
      <div className="field">
        <Label name="Genre:" />
        <Imput />
      </div>
      <div className="field">
        <Label name="Author:" />
        <select>
          <option>Select author</option>
            <AuthorsList />
        </select>
      </div>
      <button>+</button>
    </form>
  );
};

export default AddBookForm;
