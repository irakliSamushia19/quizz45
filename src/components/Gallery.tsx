import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Photo {
    id: number;
    url: string;
    thumbnailUrl: string;
    title: string;
}

const Gallery: React.FC = () => {
    const [photos, setPhotos] = useState<Photo[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [hoveredId, setHoveredId] = useState<number | null>(null);

    useEffect(() => {
        const fetchPhotos = async () => {
            try {
                const response = await axios.get<Photo[]>('https://jsonplaceholder.typicode.com/photos?_limit=4');
                setPhotos(response.data);
                setLoading(false);
            } catch (err) {
                console.error('Error fetching photos:', err);
                setError('Failed to load images');
                setLoading(false);
            }
        };

        fetchPhotos();
    }, []);

    if (loading) return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '50vh',
            fontSize: '1.2rem',
            color: '#666'
        }}>
            Loading...
        </div>
    );

    if (error) return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '50vh',
            color: '#dc3545',
            fontSize: '1.2rem'
        }}>
            Error: {error}
        </div>
    );

    return (
        <div style={{
            padding: '2rem',
            maxWidth: '1200px',
            margin: '0 auto'
        }}>
            <h1 style={{
                fontSize: '2.5rem',
                color: '#2c3e50',
                textAlign: 'center',
                marginBottom: '2rem',
                borderBottom: '2px solid #3498db',
                paddingBottom: '0.5rem'
            }}>
                Photo Gallery
            </h1>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '2rem',
                padding: '1rem'
            }}>
                {photos.map(photo => (
                    <div
                        key={photo.id}
                        onMouseEnter={() => setHoveredId(photo.id)}
                        onMouseLeave={() => setHoveredId(null)}
                        style={{
                            background: 'white',
                            borderRadius: '12px',
                            boxShadow: hoveredId === photo.id
                                ? '0 6px 12px rgba(0, 0, 0, 0.15)'
                                : '0 4px 6px rgba(0, 0, 0, 0.1)',
                            overflow: 'hidden',
                            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                            cursor: 'pointer',
                            transform: hoveredId === photo.id
                                ? 'translateY(-5px)'
                                : 'translateY(0)'
                        }}
                    >
                        <img
                            src={`https://dummyjson.com/image/400x200?type=webp&text=I+am+a+webp+image`}
                            alt={photo.title}
                            style={{
                                width: '100%',
                                height: '250px',
                                objectFit: 'cover',
                                borderRadius: '12px 12px 0 0'
                            }}
                        />
                        <div style={{
                            padding: '1.5rem',
                            background: 'white'
                        }}>
                            <p style={{
                                fontSize: '1.1rem',
                                color: '#2c3e50',
                                margin: 0,
                                textTransform: 'capitalize',
                                fontWeight: 500,
                                lineHeight: 1.4
                            }}>
                                {photo.title}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;