import React from "react";
import HomeMain from "./components/HomeMain";
import SinglPage from "./components/SinglPage";
import Footer from "./containers/Footer";
import Header from "./containers/Header";
import { connect } from "react-redux";
import "./sass/basic.scss";
import SearchingPage from "./components/SearchingPage";

const App = (props) => {
  let basicCountrol = props.watchBtn.clickBtn;
  let bascicMain;
  if (props.watchBtn.controlSearching) {
    bascicMain = <SearchingPage />;
  } else {
    bascicMain = basicCountrol ? <HomeMain /> : <SinglPage />;
  }
  return (
    <>
      <Header />
      {bascicMain}
      <Footer />
    </>
  );
};

function mapStateToProps(state) {
  return {
    watchBtn: state,
  };
}

export default connect(mapStateToProps)(App);
