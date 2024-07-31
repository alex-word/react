import { useRoutes, Navigate } from "react-router-dom"
import styled from "styled-components"

import "./app.less"
import Login from "./pages/login"

export const App = () => {
  const routes = useRoutes([
    {
      path: "/*",
      children: [
        {
          path: "login",
          element: <Login />,
          children: [],
        },
        {
          path: "*",
          element: <Login />,
        },
      ],
    },
  ])
  return <AppContainer>{routes}</AppContainer>
}

const AppContainer = styled.div`
  height: 100vh;
`
