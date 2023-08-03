const WordDisplay = ({ displayArray }) => {
  // console.log("Current Word:", props.currentWord);
  return (
    <>
      <p id="displayWord">
        {!displayArray ? "Loading..." : displayArray.map((char) => char + " ")}
      </p>
    </>
  );
};
export default WordDisplay;
