import './App.css';
import Home from '../src/Pages/home';
import Discover from "../src/Pages/discover";
import { Route, Routes } from 'react-router-dom';
import { useState } from "react";
import Navigation from "../src/components/navigation";
import React from 'react';

function App() {
  const [page, setPage] = useState("Home");
  
  const getPage = () => {
    switch (page) {
      case "Home": return <Home/>
      case "Discover": return <Discover/>
    }
  }

  return (
    <div className="App">
      <Navigation setPage={setPage} />
      <Routes>
        <Route path="/" element={getPage()} />
      </Routes>
    </div>
  );
}

export default App;