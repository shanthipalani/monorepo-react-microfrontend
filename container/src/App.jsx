import React from "react";
import ReactDOM from "react-dom";
import { LandingPage } from "./LandingPage";
import "./index.css";

const App = () => (
  <LandingPage />
);
ReactDOM.render(<App />, document.getElementById("app"));
