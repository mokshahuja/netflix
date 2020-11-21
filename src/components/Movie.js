import React from "react";
import "./Movie.css";

const Movie = ({ id, title, description, imageUrl }) => {
  description =
    description.length > 5 ? description.substring(0, 17) + "..." : description;

  return (
    // <div className="movie__link">
    //   {/* <a href={`/${id}`}> */}
        <img className="movie__posters" src={imageUrl} alt={title} />
    //    {/* </a> */}
    //  </div>
  );
};

export default Movie;
