import React, { useEffect, useState } from "react";

import "./App.css";
import { Routes, Route } from "react-router-dom";
import SeatSelectorPage from "./pages/SeatSelector/SeatSelectorPage";
import ResultPage from "./pages/Confirm/ResultPage";
import Header from "./common/layout/Header";

function App() {
  // this project has two main routes => home that contains most of the project functionality of reserving and view the tickets
  //the confirm page that only we see if the ticket buying proccess comes to success.
  return (
    <>
      {/* layout */}
      <Header />
      {/* main routes */}
      <Routes>
        <Route index path="/" element={<SeatSelectorPage />} />
        <Route path="/confirm" element={<ResultPage />} />
      </Routes>
    </>
  );
}

export default App;
