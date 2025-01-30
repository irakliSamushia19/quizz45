import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer style={{ textAlign: 'center', padding: '20px', backgroundColor: '#0048BA' }}>
            <p>&copy; {new Date().getFullYear()} React App</p>
        </footer>
    );
};

export default Footer;