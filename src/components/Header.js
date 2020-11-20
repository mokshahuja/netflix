import React, { useEffect, useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import { Button } from "@material-ui/core";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

import "./Header.css";
const Header = ({searchValue, setSearchvalue}) => {
  const [isClicked, setClicked] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll",()=>{});
    };
  }, []);

  const handleInputChange = (e) => {
    setSearchvalue(e.target.value)
  
  };
  console.log(searchValue);

  return (
    <div className={`app__header ${show && "app__headerBlack"}`}>
      <div>
        <img
          className="app__headerImage"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png"
          alt="Netflix"
        />
      </div>

      {isClicked && (
        <div className="app__headerInput">
          <input className="app__headerSearch" placeholder="Search" value={searchValue} onChange={handleInputChange} />
          <Button onClick={() => {
            setClicked(false);
            setSearchvalue('');
            }}>
            <HighlightOffIcon color="secondary" />
          </Button>
        </div>
      )}

      <div className="app__headerOptions">
        <Button
          size="small"
          className="app__headerSearchIcon"
          onClick={() => setClicked(!isClicked)}
        >
          <SearchIcon color="error" />
        </Button>
        <img
          src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
          alt=""
          className="app__headerOptionsImage"
        />
      </div>
    </div>
  );
};

export default Header;
//http://www.omdbapi.com/?s=toy&apikey=f2b88761
//omdb api key = f2b88761, s is movie keyword