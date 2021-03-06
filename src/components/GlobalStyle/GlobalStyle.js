import { createGlobalStyle } from 'styled-components';
// eslint-disable-next-line
const GlobalStyle = createGlobalStyle`
h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin-top: 0;
  margin-bottom: 0;
  padding-left: 0;
}


ul,
ol {
  margin-top: 0;
  margin-bottom: 0;
  padding-left: 0;
  list-style: none;
}
img {
  display: block;
  width: 100%;
  height: auto;
}
.link {
  text-decoration: none;
}
body {
  font-family: Roboto, sans-serif;
}
*,
*::before,
*::after {
  box-sizing: border-box;
}

`;

export { GlobalStyle };
