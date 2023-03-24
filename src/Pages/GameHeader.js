import React from "react";
// Styled Components
import styled from "styled-components";
// Framer Motion
import { motion } from "framer-motion";
import game from "../Pages/Images/game.avif";

const GameHeader = () => {
  return (
    <Header
      initial={{ opacity: 0 }}
      animate={{ opacity: 2 }}
      transition={{ duration: 1 }}
    >
      <div className="navbar">
        <h4>Game Finder</h4>
        <ul>
          <li>
            <a href="#upcoming">Upcoming Games</a>
          </li>
          <li>
            <a href="#popular">Popular Games</a>
          </li>
          <li>
            <a href="#newgames">New Games</a>
          </li>
        </ul>
      </div>
      <div className="bg-img">
        <img src={game} alt="game" />
      </div>
    </Header>
  );
};

const Header = styled(motion.div)`
  .navbar {
    background-color: #000;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 6%;
    height: 10vh;
  }

  .navbar h4 {
    color: #fff;
    font-size: 1.5rem;
    font-weight: 500;
  }

  .navbar ul {
    display: flex;
  }

  .navbar ul li {
    padding: 0 1rem;
    list-style: none;
  }

  .navbar ul li a {
    color: #fff;
    text-decoration: none;
    font-size: 1.1rem;
  }

  .bg-img img {
    width: 100%;
    height: 60vh;
    object-fit: cover;
  }
`;

export default GameHeader;
