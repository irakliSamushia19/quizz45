import React from 'react';
import { useParams } from 'react-router-dom';

const Profile: React.FC = () => {
    const { name } = useParams<{ name?: string }>();

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: 'calc(100vh - 140px)',
            padding: '2rem'
        }}>
            <h1 style={{
                color: '#2c3e50',
                fontSize: '3.5rem',
                textAlign: 'center'
            }}>
                hell yeah {name || 'am jira'}
            </h1>
        </div>
    );
};

export default Profile;