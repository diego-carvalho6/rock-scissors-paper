import { useState, useEffect } from "react";
import ScoreBoard from "../ScoreBoard";
const CheckResult = (props) => {
  const [result, setResult] = useState("");
  useEffect(() => {
    if (props.machineState === "base") {
      setResult("");
    } else if (props.playerState === props.machineState) {
      setResult("empatou!!");
    } else if (props.machineState === "rock") {
      if (props.playerState === "scissors") {
        setResult("você perdeu!!");
      } else {
        setResult("você ganhou!!");
      }
    } else if (props.machineState === "scissors") {
      if (props.playerState === "paper") {
        setResult("você perdeu!!");
      } else {
        setResult("você ganhou!!");
      }
    } else if (props.machineState === "paper") {
      if (props.playerState === "scissors") {
        setResult("você ganhou!!");
      } else {
        setResult("você perdeu!!");
      }
    }
  }, [props.machineState]);

  return (
    <>
      <ScoreBoard result={result} playerState={props.playerState}></ScoreBoard>
      <div className="result">{result}</div>
    </>
  );
};

export default CheckResult;
