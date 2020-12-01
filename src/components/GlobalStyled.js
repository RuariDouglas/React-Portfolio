// GLOBAL STYLES USING STYLED COMPONENTS
// Step 1.
import { createGlobalStyle } from "styled-components";

// Step 2.
const GlobalStyle = createGlobalStyle`
// Step 3.
:root {
    font-size: 100%;
}
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body {
    background: #1b1b1b;
    color: #fff;
    font-family: 'Rubik', sans-serif;
    overflow-x: hidden;
}
ul {
    list-style: none;
    display: flex;
}
button {
    font-weight:bold;
    font-family: 'Rubik', sans-serif;
    font-size: 1.1rem;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 3px solid #23d997;
    background: transparent;
    outline:none;
    color: #fff;
    transition: all .5s ease;
    &:hover {
        background-color: #23d997;
        color: #1b1b1b;
    }
}
h1, h2, h3 {
    font-family: 'DM Serif Display', serif;
}
h2 {
    font-weight: lighter;
    font-size: 4rem;
}
h3 {
    font-weight: 500;
}
h4 {
    font-size: 2rem;
    font-weight: 500;
}
a{
    font-family: 'Rubik', sans-serif;
    text-decoration: none;
}
span {
    font-weight: 500;
    color: #23d997;
}
p {
    padding: 3rem 0rem;
    color: #ccc;
    font-size: 1.1rem;
    line-height: 150%;
    font-weight: lighter;
}

`;

// Step 4.
export default GlobalStyle;
