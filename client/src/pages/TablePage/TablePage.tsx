import React, { FC } from 'react';
import Table from '../../components/table/Table';
import { tableData } from "../../components/table/tableData"
import { columns } from "../../components/table/tableData"
import { Container } from '../../shared-components/container/containerStyles';

const TablePage:FC = () => {
  return (
    <Container>
      <Table tableData={tableData} columns={columns} />
    </Container>
  );
};

export default TablePage;