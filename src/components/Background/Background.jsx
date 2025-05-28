import React, { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import strawberryWebP from "../../assets/image/strawberry.webp";
import strawberryPNG from "../../assets/image/strawberry.png";
import backshadow from "../../assets/svg/background/shadow.svg";
import banana from "../../assets/svg/background/banana.svg";
import leaf from "../../assets/svg/background/leaf.svg";
import style from "./Background.module.css";

const Background = () => {
  const [imagesLoaded, setImagesLoaded] = useState({
    strawberry: false,
    backshadow: false,
    banana: false,
    leaf: false
  });

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1024px)' });

  const handleImageLoad = (imageName) => {
    setImagesLoaded(prev => ({
      ...prev,
      [imageName]: true
    }));
  };

  if (isTabletOrMobile) {
    return null;
  }

  return (
    <div className={style.background}>
      <div className={style.wave}></div>
      <div className={style.container}>
        {/* Strawberry - Critical LCP image with WebP optimization */}
        <picture>
          <source srcSet={strawberryWebP} type="image/webp" />
          <img
            src={strawberryPNG}
            alt="strawberry"
            width="286"
            height="279"
            className={style.strawberry}
            loading="eager"
            fetchPriority="high"
            onLoad={() => handleImageLoad('strawberry')}
            style={{
              opacity: imagesLoaded.strawberry ? 1 : 0,
              transition: 'opacity 0.3s ease-in-out'
            }}
          />
        </picture>

        {/* Other images - Lazy loaded */}
        <img
          src={backshadow}
          alt="backshadow"
          width="603"
          height="816"
          className={style.backshadow}
          loading="lazy"
          onLoad={() => handleImageLoad('backshadow')}
          style={{
            opacity: imagesLoaded.backshadow ? 1 : 0,
            transition: 'opacity 0.3s ease-in-out'
          }}
        />
        <img
          src={banana}
          alt="banana"
          width="773"
          height="552"
          className={style.banana}
          loading="lazy"
          onLoad={() => handleImageLoad('banana')}
          style={{
            opacity: imagesLoaded.banana ? 1 : 0,
            transition: 'opacity 0.3s ease-in-out'
          }}
        />
        <img
          src={leaf}
          alt="leaf"
          width="980"
          height="820"
          className={style.leaf}
          loading="lazy"
          onLoad={() => handleImageLoad('leaf')}
          style={{
            opacity: imagesLoaded.leaf ? 1 : 0,
            transition: 'opacity 0.3s ease-in-out'
          }}
        />
      </div>
    </div>
  );
};

export default Background;
