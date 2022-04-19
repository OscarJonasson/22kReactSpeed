import React from 'react';

const Circle = props => {
  return (
    <div
      style={{ pointerEvents: props.disabled ? 'auto' : 'none' }}
      className={`speed__button ${props.active ? 'active' : ''} `}
      onClick={props.click}
    >
      {props.id}
    </div>
  );
};

export default Circle;
