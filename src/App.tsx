import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import React from "react";
import HomePage from "./components/main_page/HomePage";

function App() {
  return (
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/*<Route path="/about" element={<HomePage />} />*/}
          </Routes>
        </div>
      </Router>
  );
}

export default App;
