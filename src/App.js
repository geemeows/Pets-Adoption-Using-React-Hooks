import React from 'react';
import { render } from 'react-dom'
import Pet from './Pet';

const App = () => {
  return React.createElement("div", { id: "someting-important" }, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, { name: "Luna", type: "Dog", breed: "Havanes" }),
    React.createElement(Pet, { name: "Sookey", type: "Cat", breed: "Mixed" }),
    React.createElement(Pet, {
      name: "Darweesh",
      type: "Bird",
      breed: "Parrot"
    })
  ]);
};
render(React.createElement(App), document.getElementById("root"));
