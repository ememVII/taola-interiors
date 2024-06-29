import React, { useState, useEffect } from 'react';
import styles from './HeroSlideShow.module.css'

const images = [
  '/home/intro01.png',
  '/home/intro02.png',
  '/home/intro03.png',
  '/home/intro04.png'
];

const HeroSlideShow = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 2000);

        // Cleanup the interval on component unmount
        return () => clearInterval(interval);
    }, []);

    return (
        <div className={styles['image-slideshow']}>
            <img src={images[currentImageIndex]} alt="Slideshow" />
        </div>
    );
};

export default HeroSlideShow;
