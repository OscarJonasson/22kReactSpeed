import React from 'react';

const Circle = props => {
  return (
    <div
      className={`speed__button ${props.active ? 'active' : ''} `}
      onClick={props.click}
    >
      {props.id}
    </div>
  );
};

export default Circle;
