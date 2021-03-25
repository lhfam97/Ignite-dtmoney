import "./App.css";
import styled from "styled-components";
import { GlobalStyle } from "./styles/global";
// const Title = styled.h1`
//   font-size: 64px;
//   color: #8257e6;
// `;

export function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <GlobalStyle />
    </div>
  );
}
