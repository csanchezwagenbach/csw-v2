import React from 'react';

function Navigation({ currentPage, handlePageChange}) {
    return (

<div className="container-fluid">
                <a className="navbar-brand" href="#home"
                onClick={() => handlePageChange('Home')}>C.S.W.</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#Bio"
                            onClick={() => handlePageChange('Bio')}>Bio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#Projects"
                            onClick={() => handlePageChange('Projects')}>Projects</a>
                        </li>
                    </ul>
                </div>
            </div>
    );
}

export default Navigation;