import { gql } from '@apollo/client'

export const CREATE_USER = gql`
  mutation addTodo($input: AddTodosInput!) {
    addTodo(input: $input) {
      text, isCompleted 
    }
  }
`