import { useRoutes, Navigate } from "react-router-dom"
import styled from "styled-components"
import React from "react"

import "./app.less"
import Class from "./components/Class"
import LazyDemo from "./components/LazyDemo"

export const App = () => {
  const routes = useRoutes([
    {
      path: "/*",
      children: [
        {
          path: "LazyDemo",
          element: <LazyDemo />,
        }, 
        {
          path: "*",
          element: <Class />,
          children: [],
        },
      ],
    },
  ])
  return <AppContainer>{routes}</AppContainer>
}

const AppContainer = styled.div`
  height: 100vh;
`
