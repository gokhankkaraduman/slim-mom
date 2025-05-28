import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import strawberryWebP from "../../assets/image/strawberry.webp";
import strawberryPNG from "../../assets/image/strawberry.png";
import leaf from "../../assets/svg/background/leaf.svg";
import banana from "../../assets/svg/background/banana.svg";
import backshadow from "../../assets/svg/background/shadow.svg";
import styles from "./MobileBackground.module.css";

const MobileBackground = () => {
  const [imagesLoaded, setImagesLoaded] = useState({
    backshadow: false,
    leaf: false,
    banana: false,
    strawberry: false
  });

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1024px)' });

  const handleImageLoad = (imageName) => {
    setImagesLoaded(prev => ({
      ...prev,
      [imageName]: true
    }));
  };

  if (!isTabletOrMobile) {
    return null;
  }

  return (
    <div className={styles.mobileContainer}>
      <img
        src={backshadow}
        alt="shadow"
        width="600"
        height="800"
        className={styles.shadow}
        loading="lazy"
        onLoad={() => handleImageLoad('backshadow')}
        style={{
          opacity: imagesLoaded.backshadow ? 1 : 0,
          transition: 'opacity 0.3s ease-in-out'
        }}
      />
      <img
        src={leaf}
        alt="leaf"
        width="531"
        height="602"
        className={styles.leaf}
        loading="lazy"
        onLoad={() => handleImageLoad('leaf')}
        style={{
          opacity: imagesLoaded.leaf ? 1 : 0,
          transition: 'opacity 0.3s ease-in-out'
        }}
      />
      <img
        src={banana}
        alt="banana"
        width="600"
        height="420"
        className={styles.banana}
        loading="lazy"
        onLoad={() => handleImageLoad('banana')}
        style={{
          opacity: imagesLoaded.banana ? 1 : 0,
          transition: 'opacity 0.3s ease-in-out'
        }}
      />
      <picture>
        <source srcSet={strawberryWebP} type="image/webp" />
        <img
          src={strawberryPNG}
          alt="strawberry"
          width="208"
          height="203"
          className={styles.strawberry}
          loading="lazy"
          onLoad={() => handleImageLoad('strawberry')}
          style={{
            opacity: imagesLoaded.strawberry ? 1 : 0,
            transition: 'opacity 0.3s ease-in-out'
          }}
        />
      </picture>
    </div>
  );
};

export default MobileBackground; 