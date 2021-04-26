import React from "react";
import "./home.css";
import { Link } from "react-router-dom";

const Home = () => {
  const routes = [
    {
      link: "/even-vowel",
      name: "Even Vowel",
    },
    {
      link: "/speed-match",
      name: "Speed Match",
    },
  ];

  return (
    <div className="home">
      <h1 className="home__title">
        PLAY MINI GAMES <span className="home__title_green">ON BROWSER</span>
      </h1>
      <ul className="home__list">
        {routes.map((item) => (
          <li className="home__link_wrapper" key={item.link}>
            <Link to={item.link} className="home__link">
              /{item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
