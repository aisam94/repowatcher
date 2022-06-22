import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RepoPage from "./components/RepoPage";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/repo" element={<RepoPage />} />
      </Routes>
    </>
  );
}

export default App;
