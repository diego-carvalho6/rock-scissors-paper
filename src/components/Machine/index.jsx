import { useState, useEffect } from "react";

const Machine = (props) => {
  const [machineState, setMachineState] = useState();

  const generateRandom = () => {
    let limiteNumber = 3;
    let numberRandom = Math.floor(Math.random() * limiteNumber);
    return numberRandom;
  };
  const machineChoose = () => {
    let numberRandom = generateRandom();
    if (numberRandom === 0) {
      setMachineState("rock");
    } else if (numberRandom === 1) {
      setMachineState("paper");
    } else {
      setMachineState("scissors");
    }
  };
  useEffect(() => {
    if (props.playerState != "base") {
      machineChoose();
      props.machineGame(machineState);
    } else {
      setMachineState("aguardando acão");
    }
  }, [props.playerState, machineState]);

  return <div>{machineState}</div>;
};
export default Machine;
