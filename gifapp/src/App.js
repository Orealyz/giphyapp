import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Importez BrowserRouter as Router, Route et Routes depuis react-router-dom
import GiphyViewer from "./GiphyViewer";
import Login from "./Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GiphyViewer />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
