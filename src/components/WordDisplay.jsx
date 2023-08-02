const WordDisplay = (props) => {

  // console.log("Current Word:", props.currentWord);
  return (
    <>
      <h3>WordDisplay</h3>
      <p>{props.currentWord ? props.currentWord : "Loading..."}</p>
    </>
  );
};
export default WordDisplay;
