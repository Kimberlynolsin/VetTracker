import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomePage from "./pages/Homepage/HomePage";
import SignUp from './pages/Signup/SignUp'
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";

import "./styles/styles.scss";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path= "/"element={<HomePage />} />
          <Route path= "/signup"element={<SignUp />} />
          <Route path= "/login"element={<Login />} />
          <Route path= "/dashboard"element={<Dashboard />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
