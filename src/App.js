import React from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Routes from "./Routes";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes />
    </Router>
  );
}


export default connect((state) => {
  console.log(state);
  return state;
})(App);
