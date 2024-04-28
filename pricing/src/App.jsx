import React from "react";
import ReactDOM from "react-dom";
import { Pricing } from "./components/Pricing";

import "./index.css";

const App = () => (
  <div>
    <Pricing />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
