import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import React from "react";
import HomePage from "./components/main_page/HomePage";
import BlogMain from "./components/projects/blog/BlogMain";

function App() {
  return (
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blog" element={<BlogMain />} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;
