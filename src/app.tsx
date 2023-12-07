import { useRoutes, Navigate } from "react-router-dom"
import styled from "styled-components"
import React from "react"

import "./app.less"

export const App = () => {
  const routes = useRoutes([
    {
      path: "/*",
      children: [
        {
          path: "*",
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
