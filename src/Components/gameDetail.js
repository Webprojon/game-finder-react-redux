import React from "react";
// Styled Component
import styled from "styled-components";
// Framer Motion
import { motion } from "framer-motion";
// Redux
import { useSelector } from "react-redux";

const GameDetails = () => {
  // Data
  const { game, screen } = useSelector((state) => state.detail);
  return (
    <CardShadow>
      <div className="card-shadow">
        <CardDetail>
          <div className="status">
            <div className="rating">
              <h3>{game.name}</h3>
              <p>Rating: {game.rating}</p>
            </div>
            <div className="info">
              <h3>Platform</h3>
              <div className="platforms">
                {game.platforms.map((data) => (
                  <h2 key={data.platform.id}>{data.platform.name}</h2>
                ))}
              </div>
            </div>
          </div>
          <div className="media">
            <img src={game.background_image} alt="game.background_image" />
          </div>
          <div className="gallery">
            {screen.results.map((screen) => (
              <img key={screen.key} src={screen.image} alt="screen_image" />
            ))}
          </div>
        </CardDetail>
      </div>
    </CardShadow>
  );
};

// Styled Components
const CardShadow = styled(motion.div)`
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
`;

const CardDetail = styled(motion.div)`
  width: 90%;
  border-radius: 1rem;
  padding: 2rem 20rem;
  position: absolute;
  left: 5%;
  color: #000;
  background: #fff;
  width: 100%;
`;

export default GameDetails;
