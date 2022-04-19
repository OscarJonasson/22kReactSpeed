import React from 'react';
import Buttons from './Buttons';
import Circle from './Circle';

const GameControls = props => {
  return (
    <div class="container">
      <h1 class="speed__heading">Zeus Zap</h1>
      <div class="speed__buttons"></div>
      <div class="speed__score">
        <h3>Current Score:</h3>
        <span id="score">{props.score}</span>
      </div>
      <Buttons gameState={props.gameState} stateHandler={props.stateHandler} />
    </div>
  );
};

export default GameControls;
