import { FC } from "react";
import { BrowserRouter, useRoutes } from "react-router-dom";
import { routerPublic } from "./router";


const Routing:FC = () => {
  const RouterComponents = () => useRoutes(routerPublic)

  return (
    <BrowserRouter>
      <RouterComponents />
    </BrowserRouter>
  )
}

export default Routing