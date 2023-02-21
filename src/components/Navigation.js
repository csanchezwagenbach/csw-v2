import React from 'react';
import logo from '../assets/logo.png';
import resume from '../assets/cswResumev2.pdf';

function Navigation({ currentPage, handlePageChange }) {
    return (
        <div className='navbar navbar-expand-lg navigator'>
            <div className="container-fluid">
                <a className="navbar-brand text-white fw-bold" href="#home"
                    onClick={() => handlePageChange('Home')}><img className='logo' src={logo} alt='logo'></img></a>
                <div className="navbar" id="navbarNav">
                    <ul className="nav">
                        <li className="nav-item">
                            <a className="nav-link text-white fw-bold" aria-current="page" href="#Bio"
                                onClick={() => handlePageChange('Bio')}>Bio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white fw-bold" href="#Projects"
                                onClick={() => handlePageChange('Projects')}>Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className='nav-link text-white fw-bold' href='#Contact'
                                onClick={() => handlePageChange('Contact')}>Contact</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link text-white fw-bold' href={resume}>Resume</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navigation;