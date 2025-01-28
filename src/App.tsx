import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Gallery from './components/Gallery';
import Profile from './components/Profile';
import ErrorPage from './components/ErrorPage';
import Footer from './components/Footer';

const App: React.FC = () => {
    return (
        <Router>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh'
            }}>
                <nav>
                    <Link to="/">Home</Link> |
                    <Link to="/gallery">Gallery</Link> |
                    <Link to="/profile">Profile</Link>
                </nav>

                <main style={{
                    flex: '1 0 auto'
                }}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/gallery" element={<Gallery />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/profile/:name" element={<Profile />} />
                        <Route path="*" element={<ErrorPage />} />
                    </Routes>
                </main>

                <Footer />
            </div>
        </Router>
    );
};

export default App;