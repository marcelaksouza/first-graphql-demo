import React from "react";

const Book = (props) => {
    return (
        <li>
            <span>{props.name}</span>
            <span>{props.genre}</span>
        </li>
    );
}

export default Book;