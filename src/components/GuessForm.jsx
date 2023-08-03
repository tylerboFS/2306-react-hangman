import { useState } from "react";

const GuessForm = ({ guessedLetter, setGuessedLetter, submitHandler }) => {

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
          title="Input must be a letter"
          required
        />

        <button>Guess!</button>
      </form>
    </>
  );
};
export default GuessForm;
