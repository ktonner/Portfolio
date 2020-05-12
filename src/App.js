import React from "react";
import { Router, Route, Link } from "react-router-dom";
import { createBrowserHistory as createHistory } from "history";
import HomePage from "./HomePage";
import "./App.css";
import Navbar from "./components/Navbar";

const history = createHistory();
function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Navbar />
        <HomePage/>
        <Route path="/" exact component={HomePage} />
      </Router>
    </div>
  );
}
export default App;