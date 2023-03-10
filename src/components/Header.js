import React, { useState } from 'react';
import Navigation from './Navigation';
import Home from './pages/Home';
import Bio from './pages/Bio'
import Projects from './pages/Projects';
import Contact from './pages/Contact';

export default function Header() {
    const [currentPage, setCurrentPage] = useState('Home');

    const renderPage = () => {
        if (currentPage === 'Home') {
            return <Home />;
        }
        if (currentPage === 'Bio') {
            return <Bio />;
        }
        if (currentPage === 'Projects') {
            return <Projects />
        }
        return <Contact />
     };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <nav className='wrapper'>
            <Navigation currentPage={currentPage}
                handlePageChange={handlePageChange} /
            >
            {renderPage()}
        </nav>
    )
}

