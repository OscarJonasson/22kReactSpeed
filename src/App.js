import { Component } from 'react';
import './App.css';
import Circle from './Components/Circle';
import Buttons from './Components/Buttons';
import Gameover from './Components/Game-over';
import startSound from './Assets/sounds/MetalMan.mp3';
import endSound from './Assets/sounds/gameOver.mp3';

const startMusic = new Audio(startSound);
const endGameMusic = new Audio(endSound);
startMusic.volume = 0.2;
endGameMusic.volume = 0.2;
class App extends Component {
  state = {
    active: 0,
    score: 0,
    pace: 1000,
    rounds: 0,
    mistakes: 0,
    difficulty: 6,
    current: -1,
    faster: false,
    showGameOver: false,
    gameState: false,
    pressed: '',
    startMusic: false,
    endMusic: false,
  };

  timer = undefined;

  getRndInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  // Gives you one error per missclick
  clickHandler = i => {
    if (this.state.current === i && this.state.pressed === false) {
      this.setState({
        score: this.state.score + 1,
        pressed: true,
        faster: false,
      });
    } else {
      this.setState(prevState => {
        return {
          mistakes: prevState.mistakes + 1,
        };
      });
    }
  };

  // Stophandler for mistakes allows 3 mistakes in total

  nextCircle = () => {
    if (this.state.mistakes > 2) {
      this.stopHandler();
      return;
    }
    let nextActive;
    do {
      nextActive = this.getRndInteger(0, this.state.difficulty - 1);
    } while (nextActive === this.state.current);

    // every 4th point gets 100ms faster (checks wheter it has sped up or not)
    // Needs a better alternative
    this.state.score > 0 &&
      this.state.score % 4 === 0 &&
      this.state.faster === false &&
      this.setState(prevState => {
        return { pace: prevState.pace - 100, faster: true };
      });

    if (this.state.pressed === false) {
      this.setState(prevState => {
        return {
          mistakes: prevState.mistakes + 1,
        };
      });
    }

    this.setState({
      current: nextActive,
      pressed: false,
    });

    this.timer = setTimeout(this.nextCircle, this.state.pace);
  };

  startHandler = () => {
    this.nextCircle();
    startMusic.play();
    this.setState({
      gameState: true,
    });
  };

  stopHandler = () => {
    clearTimeout(this.timer);
    startMusic.pause();
    endGameMusic.play();
    this.setState({
      showGameOver: true,
      gameState: false,
    });
  };

  closeHandler = () => {
    window.location.reload();
    this.setState({
      showGameOver: false,
      score: 0,
      current: -1,
    });
  };

  difficulty = Array.from(Array(this.state.difficulty), () => 0);

  // This changes the state but its always 1 behind, wont re render the circles
  // ASK???
  // How to redirect all of this to the circles file?
  // difficultyHandler = e => {
  //   console.log(e.target.value);
  //   console.log(this.state.difficulty);
  //   this.setState({
  //     difficulty: e.target.value,
  //   });
  // };

  /* SOUNDS
   ***************/

  render() {
    return (
      <div className="container">
        <input type="number" onChange={this.difficultyHandler} />
        <h1 className="speed__heading">Zeus Zap</h1>
        <div className="speed__buttons">
          {/* {circles.map((_, i) => (
            <Circle
              key={i}
              id={i}
              click={() => this.clickHandler(i)}
              active={this.state.current === i}
            />
          ))} */}

          {this.difficulty.map((_, i) => (
            <Circle
              key={i}
              id={i}
              click={() => this.clickHandler(i)}
              active={this.state.current === i}
            />
          ))}
        </div>
        <div className="speed__score">
          <h3>Current Score:</h3>
          <span id="score">{this.state.score}</span>
        </div>
        {this.state.gameState ? (
          <Buttons click={this.stopHandler}>STOP</Buttons>
        ) : (
          <Buttons click={this.startHandler}>START</Buttons>
        )}

        {this.state.showGameOver && (
          <Gameover click={this.closeHandler} score={this.state.score} />
        )}
      </div>
    );
  }
}

export default App;
