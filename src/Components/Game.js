import React from "react";
// Styled Component
import styled from "styled-components";
// Framer Motion
import { motion } from "framer-motion";
// Import Redux
import { useDispatch } from "react-redux";
import { loadDetails } from "../redux/action/detailAction";

const Game = ({ name, released, img, id }) => {
  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    dispatch(loadDetails(id));
  };

  return (
    <StyledGame onClick={loadDetailHandler}>
      <h3>
        <i>Game Name</i> : {name}
      </h3>
      <p>Released Date: {released}</p>
      <img src={img} alt="games_images" />
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  min-height: 30vh;
  text-align: center;
  border-radius: 1rem;
  img {
    width: 100%;
    border-bottom-right-radius: 1rem;
    border-bottom-left-radius: 1rem;
    height: 40vh;
  }
`;

export default Game;
