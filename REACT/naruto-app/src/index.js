import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { GlobalStyle } from "./Componentes/globalStyle/GlobalStyle";
/*globalStyle é uma estilizacao global inserida
 dentro do render, serao as estilizacoes globais*/
ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
