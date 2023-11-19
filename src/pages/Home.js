import React from 'react';
import Prizes from '../components/Prizes/Prizes';
import AboutSection from '../components/About/AboutSection';
import MentorsSection from '../components/Mentors/MentorsSection';
import Background from '../components/Background';
import Navbar from '../components/Navbar/Navbar'
import Faq from '../components/Faq/Faq'
import Footer from '../components/Footer/Footer';
import Contact from '../components/Contact/Contact'
import Themes from '../components/Themes/Themes'

const Home = () => {
  return (
    <div>
      <Background />
      <div className="content">
        <Navbar/>
        <AboutSection />
        <Themes/>
        <Prizes />
        <MentorsSection />
        <Faq/>
        <Contact/>
        <Footer/>
      </div>
    </div>
  )
}

export default Home