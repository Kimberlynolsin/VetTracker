import Header from "../../components/Header/Header";

const SignUp = () => {
  return (
    <>
      <Header />
      <section className="signup">
        <h1 className="signup__title">Create A New Account</h1>
        <form className="signup__form">
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" />
          </div>
          <button type="submit">Sign Up</button>
        </form>
      </section>
    </>
  );
};

export default SignUp;
