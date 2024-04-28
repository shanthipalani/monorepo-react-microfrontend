import React from "react";
import ReactDOM from "react-dom";
import { Testimonials } from './components/Testimonials';

import "./index.css";

const App = () => (
  <div>
    <Testimonials />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
