import React from "react";
import "./Movie.css";

const Movie = ({ title, description, imageUrl }) => {
  description =
    description.length > 5 ? description.substring(0, 17) + "..." : description;

  return (
    // <div className="movie">
      <img className="movie__posters" src={imageUrl} alt={title} />
    //   <div className="song__title"> {title} </div>
    //   <div className="song__description">{description}</div>
    // </div>
  );
};

export default Movie;
