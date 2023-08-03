import { useState, useEffect } from "react";
import Graveyard from "./Graveyard";
import GuessForm from "./GuessForm";
import WordDisplay from "./WordDisplay";

const Game = () => {
  const [currentWord, setCurrentWord] = useState(null);
  const [guessedLetter, setGuessedLetter] = useState("");

  //Write a function formSubmitHandler
  //Pass this function to guess form
  //function should alert true if guess is in word
  //otherwise should alert false
  const formSubmitHandler = (event) => {
    event.preventDefault();

    const isCorrect = currentWord.includes(guessedLetter);

    alert(isCorrect ? "Correct!" : "Wrong!");
  };

  /*
   * Display the "word" as underscores
   */

  useEffect(() => {
    // fetch a random word
    const fetchWord = async () => {
      try {
        const response = await fetch(
          "https://random-word-api.vercel.app/api?words=1"
        );
        const body = await response.json();
        //console.log(body[0]);
        const theWord = body[0];
        setCurrentWord(theWord.toUpperCase());
      } catch (error) {
        console.log(error);
      }
    };
    fetchWord();
  }, []);

  return (
    <>
      <h1>Welcome to Word Guess!</h1>
      <GuessForm
        guessedLetter={guessedLetter}
        setGuessedLetter={setGuessedLetter}
        submitHandler={formSubmitHandler}
      />
      <WordDisplay currentWord={currentWord} />
      <Graveyard />
    </>
  );
};
export default Game;
