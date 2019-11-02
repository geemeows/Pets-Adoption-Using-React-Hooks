import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Luna" type="Dog" breed="Havanes" />
      <Pet name="Suekey" type="Cat" breed="Mixed" />
      <Pet name="Shalaby" type="Bird" breed="Parrot" />
    </div>
  );
};
render(<App />, document.getElementById("root"));
