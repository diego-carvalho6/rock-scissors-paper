const Player = (props) => {
  return (
    <>
      {props.disabled !== true ? (
        <>
          <button onClick={() => props.playerChoose("scissors")}>
            scissors
          </button>
          <button onClick={() => props.playerChoose("paper")}>paper</button>
          <button onClick={() => props.playerChoose("rock")}>rock</button>
        </>
      ) : (
        <>
          <button className="disabled">scissors</button>
          <button className="disabled">paper</button>
          <button className="disabled">rock</button>
        </>
      )}
    </>
  );
};
export default Player;
