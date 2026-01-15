import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HomeCarousel from '../components/HomeCarousel';

const Home = ({ onLogout }) => {
    return (
        <div className="d-flex flex-column min-vh-100">
            <Header onLogout={onLogout} />
            <main className="flex-grow-1">
                <HomeCarousel />
            </main>
            <Footer />
        </div>
    );
};

export default Home;
