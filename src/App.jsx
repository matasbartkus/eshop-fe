import { useState } from 'react'
import './App.css'
import Home from './views/Home'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Products from './views/Products';

function App() {
  return (
    <Router>
      <NavBar></NavBar>
      <Routes>
        <Route path='/products' element={<Products></Products>}></Route>
      </Routes>
      <Footer></Footer>
    </Router>
  )
}

export default App
