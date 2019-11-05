import React from "react";
import pet from "@frontendmasters/pet";
import Carousel from "./Carousel";

class Details extends React.Component {
  state = { isLoading: true };

  componentDidMount() {
    pet
      .animal(this.props.id)
      .then(({ animal }) => {
        this.setState({
          isLoading: false,
          name: animal.name,
          type: animal.type,
          location: `${animal.contact.address.city}, ${animal.contact.address.state}`,
          description: animal.description,
          media: animal.photos,
          breed: animal.breeds.primary
        });
      })
      .catch(err => console.error(err));
  }

  render() {
    const {
      name,
      type,
      location,
      description,
      breed,
      media,
      isLoading
    } = this.state;
    if (isLoading) {
      return <h1>Loading...</h1>;
    } else {
      return (
        <div className="details">
          <Carousel media={media} />
          <div>
            <h1>{name}</h1>
            <h2>{`${type} - ${breed}`}</h2>
            <h2>{location}</h2>
            <button>Adopt {name}</button>
            <p>{description}</p>
          </div>
        </div>
      );
    }
  }
}

export default Details;
