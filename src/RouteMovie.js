import Axios from "axios";
import "./RouteMovie.css";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

const RouteMovie = () => {
  const { id } = useParams();
  const [movieRouted, setMovieRouted] = useState({});
  let s = "";
  useEffect(() => {
    async function fetchdata() {
      const promise = await Axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=02e1cbd849b17d1d2c35dcffede49fa3&language=en-US`
      );
      setMovieRouted(promise.data);
    }
    fetchdata();
    console.log("------->>>>>>>>>>>>", movieRouted);
  }, [id]);

  movieRouted.genres?.forEach((element) => {
    s += element.name + ",";
  });

  return (
    <div className="movieRouted_page">
      <div>
        <img
          className="movieRouted__poster"
          src={`http://image.tmdb.org/t/p/original/${movieRouted.poster_path}`}
          alt=""
        />
      </div>

      <div className="movieRouted__description">
        <div className="movieRouted__descriptionTitle">
          <div className="movieRouted__descriptionName">
            <h1>{movieRouted.title}</h1>
            <div className="movieRouted__descriptionInfo">
              {`${movieRouted.release_date} | ${movieRouted.runtime} mins | ${
                movieRouted.adult ? "16+" : "13+"
              }`}
            </div>
          </div>

          <div className="movieRouted__descriptionRating">
            {`${Math.ceil(movieRouted.vote_average)}🌟`}
          </div>
        </div>

        <div className="movieRouted__overview">{movieRouted.overview}</div>

        <div className="movieRouted__interests">
          <div className="movieRouted__genre">
            {s.substring(0, s.length - 1)}
          </div>
          <div className="movieRouted__ImdbRating">
            <div>GO TO IMDB</div>
            <div>
              <a
                href={`https://www.imdb.com/title/${movieRouted.imdb_id}`}
                target="_blank"
              >
                <ExitToAppIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RouteMovie;

// https://api.themoviedb.org/3/movie/671039?api_key=02e1cbd849b17d1d2c35dcffede49fa3&language=en-US
