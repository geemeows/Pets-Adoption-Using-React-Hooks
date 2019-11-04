import React from "react";
import Pet from "./Pet";

const Results = ({ pets }) => {
  return (
    <div className="search">
      {!pets.length ? (
        <h1>No pets found!</h1>
      ) : (
        pets.map(pet => {
          return (
            <Pet
              name={pet.name}
              type={pet.type}
              breed={pet.breeds.primary}
              key={pet.id}
              id={pet.id}
              media={pet.photos}
              location={`${pet.contact.address.city}, ${pet.contact.address.state}`}
            />
          );
        })
      )}
    </div>
  );
};

export default Results;
