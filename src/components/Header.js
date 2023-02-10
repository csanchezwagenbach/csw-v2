import React, { useState } from 'react';
import Navigation from './Navigation';

export default function Header() {
    const [currentPage, setCurrentPage] = useState('Home');

    const renderPage = () => {
        if (currentPage === 'Home') {
            return <Home />;
        }
        if (currentPage === 'Bio') {
            return <About />;
        }
        if (currentPage === 'Projects') {
            return <Projects />
        }
        return <Contact />
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Navigation currentPage={currentPage}
                handlePageChange={handlePageChange} /
            >
            {renderPage()}
        </nav>
    )
}

