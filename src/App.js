import './App.css';
import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Schedule from './components/Schedule';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Home />
      <Schedule />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
