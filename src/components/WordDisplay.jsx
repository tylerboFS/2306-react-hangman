const WordDisplay = (props) => {

  // console.log("Current Word:", props.currentWord);
  return (
    <>
      <p>{props.currentWord ? props.currentWord : "Loading..."}</p>
    </>
  );
};
export default WordDisplay;
