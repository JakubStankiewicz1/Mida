import React, { useState, useEffect } from 'react';
import "./homeImages.css";
import assets from '../../assets/assets';
import { IoMdClose } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const HomeImages = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setCurrentImageIndex(null);
      } else if (event.key === "ArrowRight") {
        handleNext();
      } else if (event.key === "ArrowLeft") {
        handleBack();
      }
    };

    if (currentImageIndex !== null) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentImageIndex]);

  const images = [
    assets.homeImageOne,
    assets.homeImageTwo,
    assets.homeImageThree,
    assets.homeImageFour,
    assets.homeImageFive,
    assets.homeImageSix,
  ];

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handleBack = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className='homeImages'>
      <div className="homeImagesContainer">
        {/* Images Container */}
        <div className="homeImagesContainerImages">
          {images.map((image, index) => (
            <div
              key={index}
              className="homeImagesContainerImagesImageContainer"
              onClick={() => setCurrentImageIndex(index)}
            >
              <div className="homeImagesContainerImagesImageContainerEle">
                <img src={image} alt={`Image ${index + 1}`} className='homeImagesContainerImagesImageContainerEleImage' />
              </div>
            </div>
          ))}
        </div>
      </div>

      {currentImageIndex !== null && (
        <div className="homeImagesFullScreen">
          <div className="homeImagesFullScreenClose" onClick={() => setCurrentImageIndex(null)}>
            <IoMdClose className='homeImagesFullScreenCloseIcon' /> 
          </div>
          <img src={images[currentImageIndex]} alt="Full Screen" className="homeImagesFullScreenImage" />
          <IoIosArrowBack className='homeImagesFullScreenBackIcon' onClick={handleBack} />
          <IoIosArrowForward className='homeImagesFullScreenNextIcon' onClick={handleNext} />
        </div>
      )}
    </div>
  );
};

export default HomeImages;