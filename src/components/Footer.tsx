import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer style={{ textAlign: 'center', marginTop: '50px', padding: '20px', backgroundColor: '#f1f1f1' }}>
            <p>&copy; {new Date().getFullYear()} React App</p>
        </footer>
    );
};

export default Footer;