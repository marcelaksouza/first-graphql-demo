import React from "react";

const Book = (props) => {
  let data = props.data;

  const handleClick = (event) => {
    event.preventDefault();
    props.handleClick(data);
  };

  return (
    <li
      onClick={handleClick}
      className="inline-block rounded shadow p-2 m-2 border border-pink-300 text-pink-500 hover:border-pink-500 hover:boder-2 focus:border-pink-500"
    >
      <span id={data.id} data={data}>
        {data.name}
      </span>
    </li>
  );
};
export default Book;
