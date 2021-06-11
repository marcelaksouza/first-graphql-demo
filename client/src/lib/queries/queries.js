import { gql } from "@apollo/client";

export const GET_BOOK = gql`
  query($id: ID!){
    book(id: $id) {
      id
      name
      genre
      author{
        id
        name
        age
        books{
          name
          id
        }
      }
    }
  }
`;

export const GET_BOOKS = gql`
  {
    books {
      id
      name
      genre
      author{
        name
      }
    }
  }
`;

export const GET_AUTHORS = gql`
{
  authors {
    name
    id
  }
}
`;
