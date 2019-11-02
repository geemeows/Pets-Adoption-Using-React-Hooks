const Pet = ({ name, type, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, type),
    React.createElement("h2", {}, breed)
  ]);
};

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
ReactDOM.render(React.createElement(App), document.getElementById("root"));
