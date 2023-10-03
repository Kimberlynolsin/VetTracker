import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="header">
        <Link to={"/dashboard"} className="header__link">
          <h1 className="header__title"> VetTracker</h1>
        </Link>
      </header>
    </>
  );
};

export default Header;
