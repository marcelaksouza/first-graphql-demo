import { gql } from "@apollo/client";

export const ADD_BOOK = gql`
mutation addBook($name:String!, $genre:String!, $authorId:ID!) {
  addBook(name:$name, genre:$genre, authorId:$authorId) {
      name
      genre
      id
    }
  }
`;

export const EDIT_BOOK = gql`
mutation updateBook($id: ID!, $name: String!, $genre: String!) {
  updateBook(id: $id, name: $name, genre:$genre) {
      id
      name
      genre
    }
  }
`;

export const DELETE_BOOK = gql`
mutation deleteBook($id: ID!) {
  deleteBook (id: $id) {
    id  
    name
    }
  }
`;
