import React from 'react';
import studentImg from '../assets/student.png';

const HomeCarousel = () => {
    return (
        <div className="w-100" style={{ backgroundColor: '#e4e4e4', padding: '50px 0', fontFamily: 'Arial, sans-serif' }}>
            <div className="container">
                <div className="pb-5">
                    <div className="row align-items-center">
                        <div className="col-md-6 text-start mb-4 mb-md-0">
                            <h1 className="fw-bold mb-3" style={{ color: '#333333', fontSize: '36px' }}>NEW WAY OF EDUCATION</h1>
                            <h4 className="mb-4" style={{ fontSize: '22px', color: '#5e5e5e', fontWeight: 'normal' }}>LIVE STREAMING SESSIONS</h4>
                            <p className="mb-5" style={{ maxWidth: '500px', lineHeight: '1.8', fontSize: '18px', color: '#5e5e5e' }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus
                                accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor.
                                Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.
                            </p>
                            <div className="d-flex gap-3">
                                <button className="btn rounded-pill text-uppercase border-0" style={{ backgroundColor: '#568F90', fontSize: '12px', fontWeight: 'bold', padding: '10px 30px', color: '#ffffff' }}>
                                    Get Started
                                </button>
                                <button className="btn rounded-5 text-uppercase" style={{ backgroundColor: 'transparent', border: '2px solid #568F90', fontSize: '12px', fontWeight: 'bold', padding: '10px 30px', color: '#568F90' }}>
                                    Read More
                                </button>
                            </div>
                        </div>
                        <div className="col-md-6 text-center">
                            <img
                                src={studentImg}
                                alt="Student"
                                className="img-fluid"
                                style={{ maxHeight: '500px', objectFit: 'contain' }}
                            />
                        </div>
                    </div>

                    {/* Mock Carousel Indicators */}
                    <div className="carousel-indicators" style={{ position: 'relative', marginTop: '30px', marginBottom: '0' }}>
                        <button type="button" className="active" aria-current="true" style={{ width: '12px', height: '12px', borderRadius: '50%', border: '1px solid transparent', backgroundColor: '#568F90', margin: '0 5px', opacity: 1 }}></button>
                        <button type="button" style={{ width: '12px', height: '12px', borderRadius: '50%', border: '1px solid #568F90', backgroundColor: 'transparent', margin: '0 5px', opacity: 1 }}></button>
                        <button type="button" style={{ width: '12px', height: '12px', borderRadius: '50%', border: '1px solid #568F90', backgroundColor: 'transparent', margin: '0 5px', opacity: 1 }}></button>
                        <button type="button" style={{ width: '12px', height: '12px', borderRadius: '50%', border: '1px solid #568F90', backgroundColor: 'transparent', margin: '0 5px', opacity: 1 }}></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeCarousel;
