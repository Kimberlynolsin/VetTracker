import Header from "../../components/Header/Header";

const SignUp = () => {
  return (
    <>
      <Header />
      <section className="signup">
        <h1 className="signup__title">Create A New Account</h1>
        <form className="signup__form">
          <div className="signup__form__containers">
            <label className="signup__form__labels" htmlFor="name">
              Name:
            </label>
            <input type="text" id="name" name="name" />
          </div>
          <div className="signup__form__containers">
            <label className="signup__form__labels" htmlFor="email">
              Email:
            </label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="signup__form__containers">
            <label className="signup__form__labels" htmlFor="password">
              Password:
            </label>
            <input type="password" id="password" name="password" />
          </div>
          <div className="signup__form__containers signup__form__containers--btns">
            <button type="submit">Enter</button>
          </div>
        </form>
      </section>
    </>
  );
};

export default SignUp;
