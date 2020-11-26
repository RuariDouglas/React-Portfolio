import React from "react";
// PAGES
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import OurWork from "./pages/OurWork";
// STYLES
import GlobalStyle from "../src/components/GlobalStyled";
//COMPONENTS
import Nav from "../src/components/Nav";
// ROUTER
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Switch>
        <Route path="/" component={AboutUs} exact />
        <Route path="/work" component={OurWork} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </div>
  );
}

export default App;
