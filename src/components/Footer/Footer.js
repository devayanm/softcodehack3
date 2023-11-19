import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="bg-black bg-opacity-50 text-blue-300 py-10 mt-10 text-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                    <div>
                        <img src={'/footer-logo.png'} alt="Logo" className="h-12 w-auto mx-auto mb-2" />
                        <h1 className="text-2xl font-bold">Soft CodeHack 3.0</h1>
                        <p>Organized by Phicsit</p>
                        <p>Email: info@hackathon.com</p>
                    </div>
                    <div>
                        <h2 className="text-xl font-bold">Quick Links</h2>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-blue-300">About Hackathon</a></li>
                            <li><a href="#" className="hover:text-blue-300">Rules</a></li>
                            <li><a href="#" className="hover:text-blue-300">FAQs</a></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-xl font-bold">Follow Us</h2>
                        <ul className="flex space-x-4 mt-2 justify-center">
                            <li><a href="#"><FontAwesomeIcon icon={faFacebook} className="hover:text-blue-300 text-2xl" /></a></li>
                            <li><a href="#"><FontAwesomeIcon icon={faTwitter} className="hover:text-blue-300 text-2xl" /></a></li>
                            <li><a href="#"><FontAwesomeIcon icon={faInstagram} className="hover:text-blue-300 text-2xl" /></a></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 text-center text-sm">
                    &copy; {new Date().getFullYear()} Soft CodeHack 3.0. All rights reserved. <br />
                    Made with <span className="text-red-500">❤️</span> by Team Soft CodeHack
                </div>
            </div>
        </footer>
    );
};

export default Footer;