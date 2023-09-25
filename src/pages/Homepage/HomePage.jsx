import { Link } from "react-router-dom";

import Header from "../../components/Header/Header";
const HomePage = () => {
  return (
    <>
      <Header />
      <section className="hero">
        <div className="hero__container">
          <h2 className="hero__title">
            VetTracker: Where Your Pets Health Is Always in Sight
          </h2>
          <p className="hero__text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <div className="hero__btns">
          <Link to="/signup" className="hero__btns__signup">
            <p className="hero__btns__text">Sign Up</p>
          </Link>
          <Link to="/login" className="hero__btns__login">
            <p className="hero__btns__text">Login</p>
          </Link>
        </div>
      </section>
    </>
  );
};

export default HomePage;
