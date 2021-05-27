import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_AUTHORS } from "../lib/queries";
import Label from "./Label";

const AddBookForm = () => {
  const { loading, data } = useQuery(GET_AUTHORS);
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    if (data) {
      setAuthors(data);
    }
  }, [data]);

  if (loading) return <option disabled>Loading authors</option>;

  return (
    <form id="add-book">
      <div className="field">
        <Label name="Book Name:" />
        <input type="text" />
      </div>
      <div className="field">
        <Label name="Genre:" />
        <input type="text" />
      </div>
      <div className="field">
        <Label name="Author:" />
        <select>
          <option>Select author</option>
          {/* {authors &&
            authors.map((author) => (
              <option key={author.id} value={author.id}>
                {author.name}
              </option>
            ))} */}
        </select>
      </div>
      <button>+</button>
    </form>
  );
};

export default AddBookForm;
