import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home, DrCao, Member2, Member3, Member4, Member5 } from "./Views"
import { NavBar } from "./Components";

export default function App() {
  return (
    <Router>
      <div>
        <NavBar />

        <Route exact path="/" component={Home} />
        <Route path="/Cao" component={DrCao} />
        <Route path="/Member2" component={Member2} />
        <Route path="/Member3" component={Member3} />
        <Route path="/Member4" component={Member4} />
        <Route path="/Member5" component={Member5} />
      </div>
    </Router>
  );
}