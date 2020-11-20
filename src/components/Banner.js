import Axios from "axios";
import React, { useEffect, useState } from "react";
import './Banner.css'

const Banner = () => {
  const [bannerMovie, setBannerMovie] = useState([]);

  useEffect(() => {
    async function fetchdata() {
      const bannerMovieRequest = await Axios.get(
        "https://api.themoviedb.org/3/discover/tv?api_key=02e1cbd849b17d1d2c35dcffede49fa3&with_networks=213"
      );

      let movieArray = bannerMovieRequest.data.results;

      console.log(movieArray);

      setBannerMovie(movieArray[Math.floor(Math.random() * movieArray.length)]);
      console.log("BannerMovie : ", bannerMovie);
    }
    fetchdata();
  }, []);
  console.log("BannerMovie 2 : ", bannerMovie);

  function shorten(str,len) {
    return str?.length > len? str.substr(0,len)+"..." : str;
  }

  

  return (
    <div className="banner" style={{
      backgroundSize: "cover",
      backgroundImage: `url("http://image.tmdb.org/t/p/original${bannerMovie?.backdrop_path}")`,
      backgroundPosition: "center center"
    }} >
      <div className="banner__contents">
        <h1>{bannerMovie?.name || "NO Game NO LIfe"}</h1>
        <div className="banner__description">
            {bannerMovie !== null ? shorten(bannerMovie.overview,200) : '...'}
        </div>
      </div>
    </div>
  );
};

export default Banner;
