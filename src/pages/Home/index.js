import React from "react";
import { Link } from "react-router-dom";
import * as urls from "../urls";

const Home = () => {
  return (
    <div>
      <nav>
        <ul>
          <Link to={urls.CARD_PREVIEW}>card preview</Link>
        </ul>
      </nav>
      <h1>Home Page</h1>
    </div>
  );
};

export default Home;
