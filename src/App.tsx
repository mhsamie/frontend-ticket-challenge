import React, { useEffect, useState } from "react";

import "./App.css";
import { Route, Routes } from "react-router-dom";
import SeatSelectorPage from "./pages/SeatSelector/SeatSelectorPage";
import ResultPage from "./pages/Confirm/ResultPage";

function App() {
  return (
    <Routes>
      <Route index path="/" element={<SeatSelectorPage />} />
      <Route path="/confirm" element={<ResultPage />} />
    </Routes>
  );
}

export default App;
