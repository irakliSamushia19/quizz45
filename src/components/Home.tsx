import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '2rem',
            gap: '2rem',
            minHeight: '100%'
        }}>
            <h1 style={{
                fontSize: '2.5rem',
                color: '#2c3e50',
                textAlign: 'center',
                marginBottom: '1rem'
            }}>
                Welcome to Our Gallery App
            </h1>

            <div style={{
                maxWidth: '800px',
                width: '100%',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                position: 'relative'
            }}>
                <img
                    src="https://dummyjson.com/image/400x200?type=webp&text=Hero+Image"
                    alt="Hero"
                    style={{
                        width: '100%',
                        height: 'auto',
                        display: 'block'
                    }}
                />
            </div>

            <div style={{
                textAlign: 'center',
                maxWidth: '600px',
                margin: '0 auto'
            }}>
                <p style={{
                    fontSize: '1.1rem',
                    color: '#666',
                    marginBottom: '2rem',
                    lineHeight: '1.6'
                }}>
                    Explore our curated collection of amazing images.
                    Visit our gallery to discover more stunning visuals.
                </p>

                <button onClick={() => navigate('/gallery')}>
                    Explore Gallery
                </button>
            </div>
        </div>
    );
};

export default Home;