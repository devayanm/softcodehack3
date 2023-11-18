// Hero.js

import React from "react";

const Hero = () => {
  return (
    <section id="home" className="hero-section ">
      <div className="hero text-center w-full">
        <h1 className="hero-title text-6xl font-bold text-gradient">Soft CodeHack 3.0</h1>
        <p className="hero-sub text-xl font-medium py-4">Collaborate, Innovate, and Conquer at the Hackathon!</p>
        <div className="hero-btn flex flex-wrap justify-center items-center space-x-4">
          <a href="mailto:phicsit.community@gmail.com" className="btn-link">Sponsor Us</a>
          <a href="https://discord.gg/sxVdEZdsNq" target="_blank" rel="noreferrer" className="btn-link">Join Our Discord</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
