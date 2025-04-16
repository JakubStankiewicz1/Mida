import React, { useState } from 'react';
import "./homeImages.css";
import assets from '../../assets/assets';

const HomeImages = () => {
  const [fullScreenImage, setFullScreenImage] = useState(null);

  const images = [
    assets.homeImageOne,
    assets.homeImageTwo,
    assets.homeImageThree,
    assets.homeImageFour,
    assets.homeImageFive,
    assets.homeImageSix,
  ];

  return (
    <div className='homeImages'>
      <div className="homeImagesContainer">
        {/* Images Container */}
        <div className="homeImagesContainerImages">
          {images.map((image, index) => (
            <div
              key={index}
              className="homeImagesContainerImagesImageContainer"
              onClick={() => setFullScreenImage(image)}
            >
              <div className="homeImagesContainerImagesImageContainerEle">
                <img src={image} alt={`Image ${index + 1}`} className='homeImagesContainerImagesImageContainerEleImage' />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full-Screen View */}
      {fullScreenImage && (
        <div className="homeImagesFullScreen" onClick={() => setFullScreenImage(null)}>
          <img src={fullScreenImage} alt="Full Screen" className="homeImagesFullScreenImage" />
        </div>
      )}
    </div>
  );
};

export default HomeImages;