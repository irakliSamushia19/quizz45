import React from 'react';
import { useNavigate } from 'react-router-dom';

const containerStyle = {
    display: 'flex',
    flexDirection: 'column' as "column",
    justifyContent: 'center',
    alignItems: 'center',
    padding: '3rem',
    backgroundColor: '#f4f6f9',
    minHeight: '100vh'
};

const headingStyle = {
    fontSize: '2.8rem',
    fontWeight: '600',
    color: '#34495e',
    marginBottom: '1.5rem',
    letterSpacing: '1px',
    
};

const imageContainerStyle = {
    maxWidth: '900px',
    width: '100%',
    borderRadius: '16px',
    overflow: 'hidden',
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)',
    marginBottom: '2rem'
};

const heroImageStyle = {
    width: '100%',
    height: 'auto',
    display: 'block',  
};

const contentWrapperStyle = {
    
    maxWidth: '650px',
    margin: '0 auto'
};

const descriptionStyle = {
    fontSize: '1.2rem',
    color: '#555',
    lineHeight: '1.6',
    marginBottom: '2rem'
};

const exploreButtonStyle = {
    padding: '0.8rem 2.5rem',
    fontSize: '1.1rem',
    color: '#fff',
    backgroundColor: '#3498db',
    border: 'none',
    borderRadius: '30px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    fontWeight: '500',
};

const Home: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div style={containerStyle}>
            <h1 style={headingStyle}>
                Welcome to the Stunning Image Gallery
            </h1>

            <div style={imageContainerStyle}>
                <img
                    src="https://dummyjson.com/image/400x200?type=webp&text=Browse+Our+Collection"
                    alt="Hero"
                    style={heroImageStyle}
                />
            </div>

            <div style={contentWrapperStyle}>
                <p style={descriptionStyle}>
                    Dive into our curated selection of breathtaking images.
                    Discover amazing visuals from various categories that will
                    captivate and inspire you.
                </p>

                <button onClick={() => navigate('/gallery')} style={exploreButtonStyle}>
                    Explore the Gallery
                </button>
            </div>
        </div>
    );
};




export default Home;