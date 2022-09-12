import { useMutation, useQuery } from '@apollo/client';
import { useSetState } from 'ahooks';
import React, { FC, useEffect, useState } from 'react';
import OutlinedButton from '../../components/button/OutlinedButton';
import PrimaryButton from '../../components/button/PrimaryButton';
import { CREATE_USER } from '../../graphql/mutatuions/categories';
import { GET_ALL_USERS, UserQueries } from '../../graphql/query/categories';
import { Container } from '../../shared-components/container/containerStyles';
import { Category } from '../../types';

const Home:FC = () => {
  const { data, loading, error } = useQuery<UserQueries>(GET_ALL_USERS)
  const [newUser] = useMutation(CREATE_USER)
  const [categories, setCategories] = useState<Category[]>([])
  const initialState = {
    title: '',
  }
  const [category, setCategory] = useSetState<Category>(initialState)

  useEffect(() => {
    !loading && (data && setCategories(data.categories))
  }, [data])

  const userRender = categories.map((category) => (
    <ul key={category.id}>
      <li>{category.title}</li>
    </ul>
  ))

  // const createCategory = async ({ title }: User) => {
  //   const user = await newUser({
  //     variables: {
  //       input: {
  //         username, age
  //       }
  //     }
  //   })

  //   // setUser(user)
  // }

  if (loading) return <h1>Загрузка</h1>

  return (
    <Container>
      <div>
        {userRender}
      </div>
      <form>
        {/* <input value={user.username} onChange={(e) => setUser({ username: e.target.value })} />
        <input value={user.age} onChange={(e) => setUser({ age: Number(e.target.value) })} /> */}
        <PrimaryButton onClick={(e) => {
          e.preventDefault()
          // createUser(user)
        }}>Создать</PrimaryButton>
      </form>
      <PrimaryButton style={{ margin: 20 }}>hello</PrimaryButton>
      <OutlinedButton>hello</OutlinedButton>
    </Container>
  );
};

export default Home;