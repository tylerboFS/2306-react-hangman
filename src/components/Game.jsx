import { useState, useEffect } from "react";
import Graveyard from "./Graveyard";
import GuessForm from "./GuessForm";
import WordDisplay from "./WordDisplay";

const Game = () => {
  const [currentWord, setCurrentWord] = useState(null);
  const [guessedLetter, setGuessedLetter] = useState("");
  const [displayArray, setDisplayArray] = useState(null);

  //Write a function formSubmitHandler
  //Pass this function to guess form
  //function should alert true if guess is in word
  //otherwise should alert false
  const formSubmitHandler = (event) => {
    event.preventDefault();

    const isCorrect = currentWord.includes(guessedLetter);

    alert(isCorrect ? "Correct!" : "Wrong!");

    if(isCorrect){
      // have letter show up on the display
      // where in currentWord is the guessedLetter????
      const copyOfDisplayArray = [...displayArray];

      for(let i=0; i<currentWord.length; i++){

        if(currentWord[i] === guessedLetter){
          copyOfDisplayArray[i] = guessedLetter;
        }

      }

      setDisplayArray(copyOfDisplayArray);
    }
    else{
      // have letter show up in the graveyard
    }


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
        const theWord = body[0].toUpperCase();
        console.log(theWord);

        setCurrentWord(theWord);

        //convert theWord to an array
        const wordArray = [...theWord];
        //map the array with underscores
        // ["C", "A", "T"] => ["_", "_", "_"]
        setDisplayArray(wordArray.map((char) => "_"));
        //console.log(displayArray);
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
      <WordDisplay displayArray={displayArray} />
      <Graveyard />
    </>
  );
};
export default Game;
