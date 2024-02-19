import styled, { createGlobalStyle } from "styled-components";
import "modern-normalize";
export const GlobalStyle = createGlobalStyle`
body {
  margin: 0;

}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

img {
  display: block;
}

button {
  cursor: pointer;
}

a{
   text-decoration: none;
}
`;

export const Container = styled.main`
  max-width: 1200px;
`;
