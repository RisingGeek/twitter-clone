import React from "react";
import { Link } from "react-router-dom";
import { Default } from "./styles/default";

const PageNotFound = () => {
  return (
    <Default>
      <h1>Sorry, that page doesn't exist!</h1>
      <p>
        Why not try a <Link to={"/explore"}>search</Link> to find something
        else?
      </p>
    </Default>
  );
};

export default PageNotFound;
