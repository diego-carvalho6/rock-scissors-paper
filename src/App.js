import logo from "./logo.svg";
import "./App.css";
import Machine from "./components/Machine";
import Player from "./components/Player";
import ScoreBoard from "./components/ScoreBoard";
import { useState, useEffect } from "react";
import ResetGame from "./components/ResetGame";
import CheckResult from "./components/CheckResult";

const App = () => {
  const [playerState, setPlayerState] = useState("base");
  const [machineState, setMachineState] = useState();

  const playerChoose = (choose) => {
    setPlayerState(choose);
  };
  const resetGame = () => {
    setPlayerState("base");
    setMachineState("base");
  };
  const machineGame = (machineChoose) => {
    setMachineState(machineChoose);
  };

  return (
    <div className="App">
      <div className="scoreBoard">
        <CheckResult
          playerState={playerState}
          machineState={machineState}
        ></CheckResult>
      </div>
      <div className="machine">
        <div>jogada da maquina: </div>
        <Machine playerState={playerState} machineGame={machineGame}></Machine>
      </div>
      <div className="buttons">
        {playerState != "base" ? (
          <>
            <ResetGame
              playerState={playerState}
              disabled={false}
              resetGame={resetGame}
            ></ResetGame>
            <Player disabled={true} playerChoose={playerChoose}></Player>
          </>
        ) : (
          <>
            <ResetGame
              disabled={true}
              playerState={playerState}
              resetGame={resetGame}
            ></ResetGame>
            <Player disabled={false} playerChoose={playerChoose}></Player>
          </>
        )}
      </div>
    </div>
  );
};

export default App;
