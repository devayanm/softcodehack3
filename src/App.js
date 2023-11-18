import './App.css';
import React from 'react';
// import Header from './components/Header';
// import Home from './components/Home';
// import Schedule from './components/Schedule';
// import Contact from './components/Contact';
// import Footer from './components/Footer';
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Home from '../src/pages/Home'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element = {<Home/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
