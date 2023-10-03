import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";

const Login = () => {
  return (
    <>
      <Header />
      <section className="login">
        <h1 className="login__title">Login to Track Your Visits!</h1>
        <form className="login__form">
          <div className="login__form__containers">
            <label className="login__form__labels" htmlFor="email">
              Email:
            </label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="login__form__containers">
            <label className="login__form__labels" htmlFor="password">
              Password:
            </label>
            <input type="password" id="password" name="password" />
          </div>
          <div className="login__form__containers login__form__containers--btns">
            <Link to={"/dashboard"}>
              <button type="submit">Enter</button>
            </Link>
          </div>
        </form>
      </section>
    </>
  );
};

export default Login;
