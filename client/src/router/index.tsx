import { Navigate, RouteObject } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/HomePage/Home";
import TablePage from "../pages/TablePage/TablePage";

export const routerPublic: RouteObject[] = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '/home', element: <Home /> },
      { path: '/', element: <Navigate to="/home" /> },
      { path: '/table', element: <TablePage /> },
    ]
  },
  { path: '*', element: <Navigate to="/home" /> }
]