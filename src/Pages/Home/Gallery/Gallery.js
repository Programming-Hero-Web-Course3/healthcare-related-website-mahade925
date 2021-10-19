import React, { useEffect, useState } from 'react';
import './Gallery.css';

const Gallery = () => {
    const [images, setImages] = useState([]);
    useEffect(() => {
        fetch('gallery.json')
          .then(res => res.json())
          .then(data => setImages(data))
    }, [])
    return (
        <div className="gallery-container">
            <h1 className="gallery-title">Our Gallery</h1>
            <div className="gallery">
                {
                    images.map(image => <div key={image.id}>
                        <img src={image.img} alt="" />
                    </div>)
                }
            </div>
        </div>
    );
};

export default Gallery;