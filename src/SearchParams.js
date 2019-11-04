import React, { useState, useEffect } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";
import useDropdown from "./useDropdown";
import Results from "./Results";

const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, WA");
  const [breeds, setBreeds] = useState([]);

  const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
  const [breed, BreedDropdown, setBreed] = useDropdown("Breeds", "", breeds);
  const [pets, setPets] = useState([]);

  const requestPets = () => {
    pet
      .animals({
        location,
        breed,
        type: animal
      })
      .then(({ animals }) => {
        setPets(animals || []);
      })
      .catch(console.error);
  };

  //   Called after changing in some vars
  useEffect(() => {
    setBreeds([]);
    setBreed("");

    pet.breeds(animal).then(({ breeds }) => {
      const breedsRes = breeds.map(({ name }) => name);
      setBreeds(breedsRes);
    }, console.error);
  }, [animal, setBreed]);

  return (
    <div className="search-params">
      <h1>{location}</h1>
      <form
        onSubmit={e => {
          e.preventDefault();
          requestPets();
        }}
      >
        <label htmlFor="location">
          location
          <input
            id="location"
            type="text"
            placeholder="Location"
            value={location}
            onChange={e => setLocation(e.target.value)}
          />
        </label>
        {/* Animal Select */}
        <AnimalDropdown />
        {/* Breed Select */}
        <BreedDropdown />
        <button>Submit</button>
      </form>
      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;
