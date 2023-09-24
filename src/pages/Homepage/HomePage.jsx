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
          <input type="button" value="Sign Up" className="hero__btns__signup"></input>
          <input type="button" value="Login" className="hero__btns__login"></input>
        </div>
      </section>
    </>
  );
};

export default HomePage;
