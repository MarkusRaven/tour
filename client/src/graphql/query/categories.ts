import { gql } from '@apollo/client'
import { Category } from '../../types'

export interface UserQueries {
  categories: Category[]
}

export const GET_ALL_USERS = gql`
  query categories {
    categories {
      id, title, todos {
        text,
      }
    }
  }
`