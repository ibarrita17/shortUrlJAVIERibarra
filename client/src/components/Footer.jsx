import React from 'react';
import Animation from 'react-useanimations';
import linkedin from 'react-useanimations/lib/linkedin';
import github from 'react-useanimations/lib/github';

export const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="fixed bottom-0 w-full bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3 text-center transition-colors duration-300 shadow-lg z-50">
        <p className="text-white text-sm mb-3">
          
        </p>
        <small className="text-white text-sm mb-3">
            &copy; {year} All rights reserved.
        </small>
        <nav className="flex justify-between items-center px-8 md:px-16">
            <a href="https://www.linkedin.com/in/javier-ibarra-veganzones-8081031b9" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-blue-300 transition-colors duration-300">
                <Animation animation={linkedin} size={30} className="text-white hover:scale-110 transition-transform duration-200" alt="LinkedIn"/>
                <span className="text-lg">LinkedIn</span>
            </a>
            <a href="https://www.github.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-blue-300 transition-colors duration-300">
                <Animation animation={github} size={30} className="text-white hover:scale-110 transition-transform duration-200" alt="GitHub"/>
                <span className="text-lg">GitHub</span>
            </a>
        </nav>
    </footer>
    );
};