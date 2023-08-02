import { useState, useEffect } from "react";
import Graveyard from "./Graveyard";
import GuessForm from "./GuessForm";
import WordDisplay from "./WordDisplay";

const Game = () => {
  const [currentWord, setCurrentWord] = useState(null);
  //const [count, setCount] = useState(0);

  useEffect(() => {
    // fetch a random word
    const fetchWord = async () => {
      try {
        const response = await fetch(
          "https://random-word-api.vercel.app/api?words=1"
        );
        const body = await response.json();
        console.log(body[0]);
        setCurrentWord(body[0]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchWord();
  }, []);

  return (
    <>
      <h3>Game</h3>
      <GuessForm />
      <WordDisplay currentWord={currentWord} />
      <Graveyard />
    </>
  );
};
export default Game;
