import { gql } from '@apollo/client'

export const LOGIN_USER= gql`
mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
        token
        user{
            name
        }
    }
}`

export const ADD_USER = gql`
mutation AddUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        username
      }
    }
  }`

  export const REMOVE_BOOK= gql`
  mutation RemoveBook($bookId: String!) {
    removeBook(bookId: $bookId) {
      username
    }
  }
  `

  export const SAVE_BOOK = gql`
  mutation SavedBook($book: BookInput) {
    savedBook(book: $book) {
      _id
    }
  }  
  `