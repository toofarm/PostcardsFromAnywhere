import React from "react";
import ReactDOM from "react-dom";
import { render } from "react-dom";
import "../stylesheets/core-styles.scss";
import { FaEnvelope } from "react-icons/fa";
import ModalExample from "./AboutModal";

export const Heading = () => (
  <nav>
    <h1>
      <a href="http://citytechcedev.org/fssa/sdanaher/postcards-from-anywhere/">
        Postcards From Anywhere <FaEnvelope />
      </a>
    </h1>
    <h2>
      <a href="http://citytechcedev.org/fssa/sdanaher/postcards-from-anywhere/">
        <FaEnvelope />
      </a>
    </h2>
    <ul className="nav-links">
      <li>
        <ModalExample />
      </li>
    </ul>
  </nav>
);
