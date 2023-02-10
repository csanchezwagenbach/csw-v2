import React from 'react';

function Navigation({ currentPage, handlePageChange }) {
    return (
        <div className='navbar navbar-expand-lg navigator'>
            <div className="container-fluid">
                <a className="navbar-brand text-danger" href="#home"
                    onClick={() => handlePageChange('Home')}>C.S.W.</a>
                <div className="navbar" id="navbarNav">
                    <ul className="nav">
                        <li className="nav-item">
                            <a className="nav-link text-success" aria-current="page" href="#Bio"
                                onClick={() => handlePageChange('Bio')}>Bio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-dark" href="#Projects"
                                onClick={() => handlePageChange('Projects')}>Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className='nav-link' href='#Contact'
                                onClick={() => handlePageChange('Contact')}>Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navigation;