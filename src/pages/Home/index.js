import React from "react";
import { Link } from "react-router-dom";
import navigationConfig from "../../config/navigationConfig";

const Home = () => {
  return (
    <div>
      <nav>
        <ul>
          <Link to={navigationConfig.cardPreview}>card preview</Link>
        </ul>
      </nav>
      <h1>Home Page</h1>
    </div>
  );
};

export default Home;
