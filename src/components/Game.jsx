import Graveyard from "./Graveyard";
import GuessForm from "./GuessForm";
import WordDisplay from "./WordDisplay";

const Game = () => {
  return (
    <>
      <h3>Game</h3>
      <GuessForm />
      <WordDisplay />
      <Graveyard />
    </>
  );
};
export default Game;
