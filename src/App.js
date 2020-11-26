import React from "react";
import AboutUs from "./pages/AboutUs";
import GlobalStyle from "../src/components/GlobalStyled";
import Nav from "../src/components/Nav";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AboutUs />
    </div>
  );
}

export default App;
