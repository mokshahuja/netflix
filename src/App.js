import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Row from "./components/Row";
import Axios from "axios";
import Header from "./components/Header";
import Banner from "./components/Banner";
import SearchResult from "./components/SearchResult";
// import { useState } from "react";

function App() {
  const [genres, setGenres] = useState([]);
  const [searchValue, setSearchvalue] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  // if (searchValue.length === 0) {
  //   setShowSearch(false);
  // } else {
  //   setShowSearch(true);
  // }

  useEffect(async () => {
    const promise = await Axios.get(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=02e1cbd849b17d1d2c35dcffede49fa3&language=en-US"
    );

    console.log(promise.data.genres);
    setGenres(promise.data.genres);
  }, []);

  return (
    <div className="app">
      <div className="app__header">
        <Header searchValue={searchValue} setSearchvalue={setSearchvalue} />
      </div>

      {searchValue.length > 0 && (
        <div className="app__searchBody">
          {/* <h1>Hello there</h1> */}
          <SearchResult searchValue={searchValue} />
        </div>
      )}

      {searchValue.length === 0 && (
        <div className="app__body">
          <Banner />
          <div className="app__movieRows">
            {genres.map((genre) => (
              <Row key={genre.id} title={genre.name} id={genre.id} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

/*

git remote add origin https://github.com/mokshahuja/netflix-clone.git
git branch -M main
git push -u origin main

*/
