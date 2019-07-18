import React, { Component } from "react";
import Header from "../components/Header/index";
import Main from "../components/Main/index";
import Footer from "../components/Footer/index";

class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default Home;
