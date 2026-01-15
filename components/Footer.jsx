import React from 'react';

const Footer = () => {
    return (
        <footer className="py-3 mt-auto">
            <div className="container">
                <div className="row align-items-center" style={{ fontFamily: 'Arial, sans-serif' }}>
                    <div className="col-12 col-md-6 text-end text-md-start mb-2 mb-md-0">
                        <span style={{ fontSize: '13px', color: '#5e5e5e' }}>Need Help? </span>
                        <a href="#" className="text-decoration-none" style={{ color: '#00AEEF', fontSize: '13px' }}>Chat with Us</a>
                    </div>
                    <div className="col-12 col-md-6 text-end">
                        <small style={{ color: '#5e5e5e', fontSize: '13px' }}>Copyright © 2021. All rights reserved</small>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
