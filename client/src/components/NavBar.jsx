import React, { useState } from 'react';

export const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return(
        <nav className="fixed w-full top-0 flex items-center justify-between px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg text-white z-50">
            <a href="#" className="text-2xl font-bold">
                URL TINY
            </a>
            <div className="lg:hidden">
                <button type="button" className="text-white" onClick={() => setIsOpen(!isOpen)}>
                    <span className="material-icons">
                        {isOpen ? 'close' : 'menu'}
                    </span>
                </button>
            </div>
            <div className={`${isOpen ? '' : 'hidden'} lg:flex space-x-4`}>
               
                {/* Add more links as needed */}
            </div>
        </nav>
    );
};