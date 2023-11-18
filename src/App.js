import React, { useState, useEffect, useRef } from 'react';
import Home from './pages/Home';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Loader from './components/Loader';
import Prizes from './pages/Prizes';
import DeveloperExperience from './pages/DeveloperExperience';
import DataDriven from './pages/DataDriven';

const hideHeaderForPaths = ['./pages/DeveloperExperience'];

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  const headerRef = useRef(null);
  const footerRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/prizes' element={<Prizes />} />
            <Route path='/themes/ai-apps-for-developer-experience'
              render={(props) => {
                if (hideHeaderForPaths.includes(props.location.pathname)) {
                  headerRef.current = null;
                  footerRef.current = null;
                }

                return (
                  <div>
                    <DeveloperExperience {...props} />
                    {/* Conditional rendering of the Header and Footer components */}
                    <Header />
                    {<Footer />}
                  </div>
                );
              }}
            />
            <Route path='/themes/ai-apps-for-data-driven-insights' element={<DataDriven />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
