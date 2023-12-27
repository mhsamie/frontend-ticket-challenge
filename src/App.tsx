import React, { useEffect, useState } from "react";

import "./App.css";
import { Routes, Route } from "react-router-dom";
import SeatSelectorPage from "./pages/SeatSelector/SeatSelectorPage";
import ResultPage from "./pages/Confirm/ResultPage";
import Header from "./common/layout/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index path="/" element={<SeatSelectorPage />} />
        <Route path="/confirm" element={<ResultPage />} />
      </Routes>
    </>
  );
}

export default App;
