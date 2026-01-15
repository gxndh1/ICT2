import React from 'react';

const InfoSection = () => {
    return (
        <div className="d-flex flex-column justify-content-center h-100 p-5" style={{ color: '#5e5e5e', fontFamily: 'Arial, sans-serif' }}>
            <div>
                <h1 className="fw-normal mb-4" style={{ color: '#333333', fontSize: '36px' }}>Online Training</h1>
                <p className="lead" style={{ fontSize: '16px', color: '#5e5e5e' }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.
                    Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.
                    Proin sodales pulvinar sic tempor. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.
                </p>
                <button className="btn text-white mt-3 text-uppercase border-0" style={{ backgroundColor: '#568F90', fontSize: '12px', fontWeight: 'bold', padding: '10px 30px', borderRadius: '25px' }}>
                    LEARN MORE
                </button>
            </div>
        </div>
    );
};

export default InfoSection;
