import { useState } from 'react'
import './App.css'
import Home from './views/Home'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
      <NavBar></NavBar>
    </Router>
  )
}

export default App
