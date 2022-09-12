import { ColumnType, DefaultData } from "./types";

const generateData = (obj: DefaultData, count: number):  DefaultData[] => { 
  const newArray: DefaultData[] = []

  for (let i = 0; i < count; i++) {
    newArray.push({
      ...obj,
      name: `${obj.name}${i}`,
      surname: `${obj.surname}${i}`,
      key: `${obj.key}${i}`,
    })
  }

  return newArray
}

export const tableData: DefaultData[] = generateData({
  name: 'Ivan',
  surname: 'Babaev',
  role: 'user',
  key: 'ivan'
}, 10)

export const columns: ColumnType[] = [
  {
    title: 'name',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: 'surname',
    dataIndex: 'surname',
    key: 'surname'
  },
  {
    title: 'role',
    dataIndex: 'role',
    key: 'role'
  },
]