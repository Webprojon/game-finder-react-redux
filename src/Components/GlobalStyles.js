import React from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
  margin:0px;
  padding:0px;
  box-sizing: border-box;
}

html::-webkit-scrollbar {
  width: .4rem;
}

html::-webkit-scrollbar-thumb {
  background: orange;
  border-radius: .5rem;
}

body {
  font-family: 'SF Pro Display', sans-serif;
  width: 100%;
}

h2 {
  font-size: 2.5rem;
  letter-spacing: .1rem;
}
h3 {
  font-size: 1.3rem;
  padding: 1rem;
  letter-spacing: .1rem;
  color:rgba(0,0,0,0.7);
}
p {
  font-size: 1.2rem;
  line-height: 200%;
  color: #777;
}
 a {
text-decoration: none;
color: #000;
 }
`;

export default GlobalStyles;
