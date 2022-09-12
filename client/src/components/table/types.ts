import { Key } from "react";

export interface DefaultData {
  key: Key;
  name: string;
  surname: string;
  role: 'admin' | 'guest' | 'user';
}

export interface ColumnType {
  key: Key;
  dataIndex: Key;
  title: string;
}