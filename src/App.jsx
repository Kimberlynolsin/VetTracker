import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./styles/styles.scss";
import HomePage from "./pages/Homepage/HomePage";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path= "/"element={<HomePage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
