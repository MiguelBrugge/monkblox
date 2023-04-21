import './App.css';
import Home from '../src/Pages/home';
import { Route, Routes } from 'react-router-dom';
import Navigation from "../src/components/navigation";
import React from 'react';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;