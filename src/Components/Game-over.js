import React from 'react';

const Gameover = props => {
  let message;
  if (props.score === 0) {
    message = `C'mon try harder! Score: ${props.score}`;
  } else if (props.score <= 3) {
    message = `You can do better! Score: ${props.score}`;
  } else if (props.score <= 9) {
    message = `You are getting the hang of it! Score: ${props.score}`;
  } else if (props.score >= 10) {
    message = `Good job! Time to take a break! Score: ${props.score}`;
  }

  return (
    <section id="overlay">
      <div className="modal">
        <p>Whoops, game over!</p>
        <p id="result">{message}</p>
        <button type="button" id="close" onClick={props.click}>
          Close
        </button>
      </div>
    </section>
  );
};

export default Gameover;
