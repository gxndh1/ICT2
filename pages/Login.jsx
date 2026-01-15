import React from 'react';
import InfoSection from '../components/InfoSection';
import LoginForm from '../components/LoginForm';
import Footer from '../components/Footer';

const Login = ({ onLoginSuccess }) => {
    return (
        <div className="d-flex flex-column min-vh-100" style={{ backgroundColor: '#e4e4e4' }}>
            <div className="container flex-grow-1">
                <div className="row h-100">
                    <div className="col-md-6 h-100">
                        <InfoSection />
                    </div>
                    <div className="col-md-6 h-100">
                        <LoginForm onLoginSuccess={onLoginSuccess} />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Login;
