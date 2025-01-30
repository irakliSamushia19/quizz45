import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface PhotoData {
    id: number;
    url: string;
    thumbnailUrl: string;
    title: string;
}

const PhotoGallery: React.FC = () => {
    const [photosList, setPhotosList] = useState<PhotoData[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [errorMsg, setErrorMsg] = useState<string | null>(null);
    const [activePhoto, setActivePhoto] = useState<number | null>(null);

    useEffect(() => {
        const loadPhotos = async () => {
            try {
                const response = await axios.get<PhotoData[]>('https://jsonplaceholder.typicode.com/photos?_limit=4');
                setPhotosList(response.data);
                setIsLoading(false);
            } catch (error) {
                console.error('Error loading photos:', error);
                setErrorMsg('Something went wrong. Please try again later.');
                setIsLoading(false);
            }
        };

        loadPhotos();
    }, []);

    const loadingComponent = (
        <div style={centerStyle}>
            <span>Loading...</span>
        </div>
    );

    const errorComponent = (
        <div style={{ ...centerStyle, color: '#dc3545' }}>
            <span>{errorMsg}</span>
        </div>
    );

    const noPhotosComponent = (
        <div style={centerStyle}>
            <span>No photos to display.</span>
        </div>
    );

    const photoCardStyle = {
        borderRadius: '12px',
        backgroundColor: '#fff',
        overflow: 'hidden',
        transition: 'box-shadow 0.3s, transform 0.3s',
        cursor: 'pointer',
        boxShadow: activePhoto ? '0 8px 16px rgba(0, 0, 0, 0.2)' : '0 4px 8px rgba(0, 0, 0, 0.1)',
        transform: activePhoto ? 'translateY(-6px)' : 'translateY(0)'
    };

    const renderPhotos = photosList.map(photo => (
        <div
            key={photo.id}
            onMouseEnter={() => setActivePhoto(photo.id)}
            onMouseLeave={() => setActivePhoto(null)}
            style={photoCardStyle}
        >
            <img
                src={photo.thumbnailUrl}
                alt={photo.title}
                style={{
                    width: '100%',
                    height: '220px',
                    objectFit: 'cover',
                    borderRadius: '12px 12px 0 0'
                }}
            />
            <div style={descriptionStyle}>
                <p style={titleStyle}>{photo.title}</p>
            </div>
        </div>
    ));

    if (isLoading) return loadingComponent;
    if (errorMsg) return errorComponent;
    if (photosList.length === 0) return noPhotosComponent;

    

    return (
        <div style={galleryWrapperStyle}>
            <h1 style={
                {
                    fontSize: '2.4rem',
                    color: '#34495e',
                    textAlign: 'center',
                    marginBottom: '2rem',
                    paddingBottom: '0.5rem',
                    borderBottom: '2px solid #3498db'
                }
            }>Our Photo Gallery</h1>
            <div style={gridContainerStyle}>
                {renderPhotos}
            </div>
        </div>
    );
};


const galleryWrapperStyle = {
    padding: '2rem',
    maxWidth: '1300px',
    margin: '0 auto'
};



const gridContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: '1.5rem',
    padding: '1rem'
};

const descriptionStyle = {
    padding: '1rem',
    backgroundColor: '#fff'
};

const titleStyle = {
    fontSize: '1.1rem',
    color: '#2c3e50',
    margin: 0,
    fontWeight: 500,
    lineHeight: '1.4'
};

const centerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '50vh',
    fontSize: '1.3rem',
    color: '#666'
};

export default PhotoGallery;