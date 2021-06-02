import React from "react";

const Book = (props) => {
  return (
    <li
      onClick={props.handleClick}
      className="inline-block rounded shadow p-2 m-2 border border-pink-300 text-pink-500 hover:border-pink-500 hover:boder-2 focus:border-pink-500"
    >
      <span id={props.id}>{props.name}</span>
      <span>{props.genre}</span>
    </li>
  );
};
export default Book;
