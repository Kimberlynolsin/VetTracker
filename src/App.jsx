import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomePage from "./pages/Homepage/HomePage";
import SignUp from './pages/Signup/SignUp'

import "./styles/styles.scss";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path= "/"element={<HomePage />} />
          <Route path= "/signup"element={<SignUp />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
