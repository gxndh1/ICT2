import React, { useState } from 'react';
import logo from '../assets/logo.png';
import mobileLogo from '../assets/logo-mobile.png';
import hamburgerIcon from '../assets/hamburger.png';
import closeIcon from '../assets/close.png';

const Header = ({ onLogout }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar navbar-expand-md navbar-light bg-light py-3 shadow-sm">
            <div className="container">
                <a className="navbar-brand d-flex align-items-center" href="#">
                    {/* Desktop Logo */}
                    <img src={logo} alt="eLearning Platform" className="d-none d-md-block" style={{ height: '40px' }} />
                    {/* Mobile Logo */}
                    <img src={mobileLogo} alt="eLearning Platform" className="d-block d-md-none" style={{ height: '40px' }} />
                </a>
                <button
                    className="navbar-toggler border-0 shadow-none"
                    type="button"
                    onClick={handleToggle}
                    aria-label="Toggle navigation"
                >
                    {isOpen ? (
                        <img src={closeIcon} alt="Close" style={{ width: '28px', height: '28px' }} />
                    ) : (
                        <img src={hamburgerIcon} alt="Menu" style={{ width: '30px', height: '30px' }} />
                    )}
                </button>
                <div className={`collapse navbar-collapse mt-2 mt-md-0 ${isOpen ? 'show' : ''}`} id="basic-navbar-nav" style={{ fontFamily: 'Arial, sans-serif' }}>
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
