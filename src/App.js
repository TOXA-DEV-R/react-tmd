import React from "react";
import HomeMain from "./components/HomeMain";
import SinglPage from "./components/SinglPage";
import Footer from "./containers/Footer";
import Header from "./containers/Header";
import { connect } from "react-redux";
import "./sass/basic.scss";

const App = (props) => {
  let basicCountrol = props.watchBtn.clickBtn;
  console.log(props);
  return (
    <>
      <Header />
      {basicCountrol ? <HomeMain /> : <SinglPage />}
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
