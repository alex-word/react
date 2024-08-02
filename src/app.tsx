import styled from "styled-components"
import Routes from "./router/index";

import "./app-reset.css"
import "./app.less"

export const App = () => {
  return <AppContainer>
    <Routes />
  </AppContainer>
}

const AppContainer = styled.div`
  height: 100vh;
`
