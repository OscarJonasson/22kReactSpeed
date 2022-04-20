import React from 'react';

const Buttons = props => {
  return (
    <div className="buttons">
      <button
        style={{ pointerEvents: props.disabled ? 'none' : 'auto' }}
        className="startStop"
        type={props.type || 'button'}
        onClick={props.click}
      >
        {props.children}
      </button>
    </div>
  );
};

// const Buttons = props => {
//   if (props.gameState === false) {
//     return (
//       <div class="speed__controls">
//         <button
//           type="button"
//           class="speed__start"
//           id="start"
//           onClick={props.stateHandler}
//         >
//           Start
//         </button>
//       </div>
//     );
//   } else {
//     return (
//       <div class="speed__controls">
//         <button
//           type="button"
//           class="speed__stop"
//           id="stop"
//           onClick={props.stateHandler}
//         >
//           Stop
//         </button>
//       </div>
//     );
//   }
// };

export default Buttons;
