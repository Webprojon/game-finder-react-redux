import React, { useEffect } from "react";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../redux/action/gamesAction";
// Components
import Game from "../Components/Game";
// Styled Component
import styled from "styled-components";
// Framer Motion
import { motion } from "framer-motion";
import GameDetails from "../Components/gameDetail";
import GameHeader from "./GameHeader";

const Home = () => {
  // useDispatch
  const dispatch = useDispatch();

  // useEffect
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);

  // Data Ga Kirish
  const { popular, newGames, upcoming } = useSelector((state) => state.games);
  return (
    <GameLists>
      <GameHeader />
      {/* <GameDetails /> */}
      <h2 id="upcoming">Upcoming Games</h2>
      <Games
        initial={{ opacity: 0 }}
        animate={{ opacity: 2 }}
        transition={{ duration: 1 }}
      >
        {upcoming.map((game) => (
          <Game
            key={game.id}
            name={game.name}
            released={game.released}
            img={game.background_image}
          />
        ))}
        <Game />;
      </Games>
      <h2 id="popular">Popular Games</h2>
      <Games
        initial={{ opacity: 0 }}
        animate={{ opacity: 2 }}
        transition={{ duration: 1 }}
      >
        {popular.map((game) => (
          <Game
            key={game.id}
            name={game.name}
            released={game.released}
            img={game.background_image}
          />
        ))}
        <Game />;
      </Games>
      <h2 id="newgames">New Games</h2>
      <Games
        initial={{ opacity: 0 }}
        animate={{ opacity: 2 }}
        transition={{ duration: 1 }}
      >
        {newGames.map((game) => (
          <Game
            key={game.id}
            name={game.name}
            released={game.released}
            img={game.background_image}
          />
        ))}
        <Game />;
      </Games>
    </GameLists>
  );
};

// Styled-Components
const GameLists = styled(motion.div)`
  width: 100%;
  h2 {
    padding: 2rem 2rem;
  }
`;
const Games = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  column-gap: 3rem;
  row-gap: 4rem;
  margin: 2rem;
  /* gap: 3rem; */
`;

export default Home;
