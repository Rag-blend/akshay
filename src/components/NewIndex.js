
import React from 'react';
import './Index.css'; // Import your CSS file for this component
import AboutUsComponent from './AboutUsComponent';

const NewIndex = () => {
    return (
    <div>
            <div className="background-image-container">
            <div className="content">
                <h2>We care for you</h2>
                <p>Discover amazing products and services.</p>
                <button className="btn">Explore Now</button>
            </div>
        </div>
        <AboutUsComponent/>
    </div>
    );
};

export default NewIndex;