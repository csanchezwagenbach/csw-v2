import React, { useState } from 'react';
import Navigation from './Navigation';
import Home from './pages/Home';

export default function Header() {
    const [currentPage, setCurrentPage] = useState('Home');

    const renderPage = () => {
        if (currentPage === 'Home') {
            return <Home />;
        }
    //     if (currentPage === 'Bio') {
    //         return <About />;
    //     }
    //     if (currentPage === 'Projects') {
    //         return <Projects />
    //     }
    //     return <Contact />
     };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <nav>
            <Navigation currentPage={currentPage}
                handlePageChange={handlePageChange} /
            >
            {renderPage()}
        </nav>
    )
}

