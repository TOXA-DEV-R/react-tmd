import React, { Component } from "react";
import HomeMain from "./components/HomeMain";
import Footer from "./containers/Footer";
import Header from "./containers/Header";

import "./sass/basic.scss";
class App extends Component {
  render() {
    return (
      <>
        <Header />
        <HomeMain />
        <Footer />
      </>
    );
  }
}

export default App;
