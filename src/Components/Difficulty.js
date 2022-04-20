import React from 'react';

const Difficulty = props => {
  return (
    <div>
      <button className="difficulty__btn" onClick={props.diffDown}>
        ⬇️
      </button>
      <button className="difficulty__btn" onClick={props.diffUp}>
        ⬆️
      </button>
      <button className="difficulty__btn" onClick={props.ok}>
        🆗
      </button>
    </div>
  );
};

export default Difficulty;
