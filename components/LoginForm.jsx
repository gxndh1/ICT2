import React, { useState } from 'react';

const LoginForm = ({ onLoginSuccess }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username === 'Cognizant' && password === 'Hello123') {
            onLoginSuccess();
        } else {
            alert('credentials entered are incorrect');
        }
    };

    return (
        <div className="d-flex align-items-center justify-content-center h-100" style={{ fontFamily: 'Arial, sans-serif' }}>
            <div style={{ position: 'relative' }}>
                <div className="mb-5 text-center">
                    <h5 className="fw-bold fs-4" style={{ color: '#333333' }}>
                        <i className="bi bi-mortarboard-fill me-2"></i>
                        eLearning Platform
                    </h5>
                </div>

                <div className="card shadow-lg p-5" style={{ width: '100%', maxWidth: '400px', borderRadius: '15px', border: 'none' }}>
                    <div className="card-body">
                        <h3 className="text-center mb-4 fw-normal" style={{ fontSize: '36px', color: '#333333' }}>Sign In</h3>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <input
                                    type="text"
                                    placeholder="User Name"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    className="form-control border-0 py-3"
                                    style={{ backgroundColor: '#F2F2F2', fontSize: '14px', color: '#5e5e5e' }}
                                />
                            </div>

                            <div className="mb-4">
                                <input
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="form-control border-0 py-3"
                                    style={{ backgroundColor: '#F2F2F2', fontSize: '14px', color: '#5e5e5e' }}
                                />
                            </div>

                            <div className="text-end mb-4">
                                <a href="#" style={{ color: '#00AEEF', textDecoration: 'none', fontSize: '13px' }}>Forgot Password?</a>
                            </div>

                            <div className="d-grid">
                                <button type="submit" className="btn py-2 text-uppercase" style={{ backgroundColor: '#0D3563', border: 'none', borderRadius: '25px', fontSize: '14px', fontWeight: 'bold', color: '#fff' }}>
                                    SIGN IN
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
