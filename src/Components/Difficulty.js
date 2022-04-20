import React from 'react';

const Difficulty = props => {
  return (
    <div>
      <button className="difficulty__btn--down" onClick={props.diffDown}>
        ⬇
      </button>
      <button className="difficulty__btn--up" onClick={props.diffUp}>
        ⬆
      </button>
      <button className="difficulty__btn--ok" onClick={props.ok}>
        👍
      </button>
    </div>
  );
};

export default Difficulty;
