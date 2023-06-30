import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Todo from "./Todo";
import Api from "./Api";
import FormValidation from "./FormValidation";
import Modal2 from "./Modal2";
import DragAndDrop from "./DragAndDrop";
import Chart2 from "./Chart2";

function Routing() {
  return (
    <Router>
      <div>
        <ul style={{ display: "flex", marginLeft: "20px", fontSize: "20px" }}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>

          <li>
            <Link to="/todo">Todo</Link>
          </li>

          <li>
            <Link to="/api">Api</Link>
          </li>
          <li>
            <Link to="/form">Form</Link>
          </li>
          <li>
            <Link to="/modal">Modal</Link>
          </li>
          <li>
            <Link to="/draganddrop">DragAndDrop</Link>
          </li>
          <li>
            <Link to="/chart">Chart</Link>
          </li>
        </ul>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
          <Route exact path="/todo" element={<Todo />}></Route>
          <Route exact path="/api" element={<Api />}></Route>
          <Route exact path="/form" element={<FormValidation />}></Route>
          <Route exact path="/modal" element={<Modal2 />}></Route>
          <Route exact path="/draganddrop" element={<DragAndDrop />}></Route>
          <Route exact path="/chart" element={<Chart2 />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default Routing;
