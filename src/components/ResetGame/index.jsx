const ResetGame = (props) => {
  return (
    <>
      {props.disabled === false ? (
        <button onClick={() => props.resetGame()} className="resetButton">
          reset game
        </button>
      ) : (
        <button className="disabled">reset game</button>
      )}
    </>
  );
};

export default ResetGame;
