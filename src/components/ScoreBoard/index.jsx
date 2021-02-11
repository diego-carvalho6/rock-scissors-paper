import { useState, useEffect } from "react";

const ScoreBoard = (props) => {
  const [scoreBoard, setScoreboard] = useState([0, "  :  ", 0]);
  useEffect(() => {
    compareResult();
  }, [props.playerState]);

  const compareResult = () => {
    if (props.result === "você perdeu!!") {
      setScoreboard([scoreBoard[0], "  :  ", (scoreBoard[2] += 1)]);
    } else if (props.result === "você ganhou!!") {
      setScoreboard([(scoreBoard[0] += 1), "  :  ", scoreBoard[2]]);
    }
  };

  return <div className="score">{scoreBoard}</div>;
};
export default ScoreBoard;
