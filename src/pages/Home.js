import React from 'react';
import Prizes from '../components/Prizes/Prizes';
import AboutSection from '../components/About/AboutSection';
import MentorsSection from '../components/Mentors/MentorsSection';

const Home = () => {
  return (
    <div>
        <Prizes/>
        <AboutSection/>
        <MentorsSection/>
    </div>
  )
}

export default Home