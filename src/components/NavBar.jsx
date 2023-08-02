import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <Link className="navlink" to="/">Game</Link>
      <Link className="navlink" to="/instructions">Instructions</Link>
    </>
  );
};

export default NavBar;
