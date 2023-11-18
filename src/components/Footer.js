// src/Footer.js
import React from 'react';
import { FaWhatsapp, FaInstagram, FaLinkedinIn, FaTelegram, FaTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className=" text-white py-6">
      <div className="container mx-auto text-center">
        <p>Powered by PHICSIT</p>
        <div className="flex justify-center mb-2">
          <a href="https://www.instagram.com/phicsit.in/" target="_blank" rel="noreferrer">
            <FaInstagram className="social-icon" />
          </a>
          <a href="https://t.me/phicsitofficial" target="_blank" rel="noreferrer">
            <FaTelegram className="social-icon" />
          </a>
          <a href="https://chat.whatsapp.com/BuZvZcJhk2J9x4eHfk8eGw" target="_blank" rel="noreferrer">
            <FaWhatsapp className="social-icon" />
          </a>
          <a href="https://www.linkedin.com/company/phicsit/" target="_blank" rel="noreferrer">
            <FaLinkedinIn className="social-icon" />
          </a>
          <a href="https://twitter.com/PHICSIT" target="_blank" rel="noreferrer">
            <FaTwitter className="social-icon" />
          </a>
        </div>
        <p className="text-gray-500">&copy; SoftCodeHack, 2023</p>
        <p>Made with 💙 by Team SoftCodeHack</p>
      </div>
    </footer>
  );
}

export default Footer;
