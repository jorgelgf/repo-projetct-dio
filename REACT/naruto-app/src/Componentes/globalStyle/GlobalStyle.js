import { createGlobalStyle } from "styled-components";
import bgImg from "../../Image/bg.jpeg";
export const GlobalStyle = createGlobalStyle`
body{
  font-family: "New Tegomin", serif;
  color: #332c36;
  padding:0;
  margin:0;
  font-family: 'New Tegomin',serif;
  background: url(${bgImg}) center no-repeat;
  background-size: cover;
}

`;
