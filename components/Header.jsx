import React from 'react';
import logo from '../assets/logo.png';

const Header = ({ onLogout }) => {
    const handleToggle = () => {
        const collapse = document.getElementById('basic-navbar-nav');
        collapse.classList.toggle('show');
    };

    return (
        <nav className="navbar navbar-expand-md navbar-light bg-light py-3 shadow-sm">
            <div className="container">
                <a className="navbar-brand d-flex align-items-center" href="#">
                    <img src={logo} alt="eLearning Platform" style={{ height: '40px' }} />
                </a>
                <button className="navbar-toggler" type="button" onClick={handleToggle} aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse mt-2 mt-md-0" id="basic-navbar-nav" style={{ fontFamily: 'Arial, sans-serif' }}>
                    <ul className="navbar-nav ms-auto align-items-md-center">
                        <li className="nav-item">
                            <a href="#home" className="nav-link mx-2 border-bottom border-md-0 py-2 fw-bold" style={{ color: '#0D3563', fontSize: '14px' }}>HOME</a>
                        </li>
                        <li className="nav-item">
                            <a href="#about" className="nav-link mx-2 border-bottom border-md-0 py-2" style={{ color: '#626262', fontSize: '14px' }}>ABOUT US</a>
                        </li>
                        <li className="nav-item">
                            <a href="#services" className="nav-link mx-2 border-bottom border-md-0 py-2" style={{ color: '#626262', fontSize: '14px' }}>SERVICES</a>
                        </li>
                        <li className="nav-item">
                            <a href="#faculties" className="nav-link mx-2 border-bottom border-md-0 py-2" style={{ color: '#626262', fontSize: '14px' }}>FACULTIES</a>
                        </li>
                        <li className="nav-item">
                            <a href="#portfolio" className="nav-link mx-2 border-bottom border-md-0 py-2" style={{ color: '#626262', fontSize: '14px' }}>PORTFOLIO</a>
                        </li>
                        <li className="nav-item">
                            <a href="#contact" className="nav-link mx-2 border-bottom border-md-0 py-2" style={{ color: '#626262', fontSize: '14px' }}>CONTACT US</a>
                        </li>
                        <li className="nav-item">
                            <span onClick={onLogout} className="nav-link mx-2 py-2" style={{ cursor: 'pointer', color: '#626262', fontSize: '14px' }}>LOGOUT</span>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;
