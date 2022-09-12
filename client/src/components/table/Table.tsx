import React, { FC } from 'react'
import styled from 'styled-components'
import { ColumnType, DefaultData } from './types'

export interface TableProps {
  tableData: DefaultData[],
  columns: ColumnType[]
}

const Table: FC<TableProps> = ({ tableData, columns }) => {

  const TableWrapper = styled.div`
    width: 600px;
    border: 1px solid #e4e4e4;
  `

  return (
    <TableWrapper>
      <table>
        <thead>
          <tr>
            {
              columns.map((col) => (
                <th key={col.key}>{col.title}</th>
              ))
            }
          </tr>
        </thead>
        <tbody>
          {
            tableData.map((data: any) => (
              <tr key={data.key}>
                {
                  Object.keys(data).map((key) => (
                    <td key={data[key]}>{data[key]}</td>
                  ))
                }
              </tr>
            ))
          }
        </tbody>
      </table>
    </TableWrapper>
  )
}

export default Table