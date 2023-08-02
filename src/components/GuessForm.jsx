import { useState } from "react";

const GuessForm = () => {
  const [guessedLetter, setGuessedLetter] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();

    alert(guessedLetter);

  };

  return (
    <>
      <h3>Guess a Letter</h3>
      <form onSubmit={submitHandler}>
        <input
          id="letterInput"
          type="text"
          value={guessedLetter}
          onChange={(e) => setGuessedLetter(e.target.value.toUpperCase())}
          pattern="[A-Za-z]{1}"
          maxLength={1}
          size={2}
        />
        
        <button>Guess!</button>
      </form>
    </>
  );
};
export default GuessForm;
