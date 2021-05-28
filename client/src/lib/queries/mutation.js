import { gql } from "@apollo/client";

export const ADD_BOOK = gql`
mutation addBook($name: String!, $genre: String!, $authorId: ID!) {
    AddBook (name: $name, genre:$genre ,authorId: $authorId) {
      name
      genre
      id
    }
  }
`;
