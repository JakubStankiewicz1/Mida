import React from 'react';
import "./homeOwner.css";
import assets from '../../assets/assets';

const HomeOwner = () => {
  return (
    <div className="homeOwner">
        <div className="homeOwnerContainer">
            {/* Image Section */}
            <div className="homeOwnerContainerImage">
                <div className="homeOwnerContainerImageContainer">
                    <div className="homeOwnerContainerImageOverlay"></div>
                    <img src={assets.homeOwner} alt="" className='homeOwnerContainerImageContainerImage' />
                </div>
            </div>

            {/* Text Section */}
            <div className="homeOwnerContainerText">
                <div className="homeOwnerContainerTextContainer">
                    {/* Title */}
                    <div className="homeOwnerContainerTextContainerTitle">
                        <div className="homeOwnerContainerTextContainerTitleContainer">
                            <p className="homeOwnerContainerTextContainerTitleContainerTextOne">
                            Douglass Williams,
                            </p>
                            <p className="homeOwnerContainerTextContainerTitleContainerTextTwo">
                                Chef/Owner
                            </p>
                        </div>
                    </div>

                    {/* Subtitle */}
                    <div className="homeOwnerContainerTextContainerSubtitle">
                        <div className="homeOwnerContainerTextContainerSubtitleContainer">
                            <p className="homeOwnerContainerTextContainerSubtitleContainerText">
                            Recently named by Food & Wine as one of the top 10 Best New Chefs in America 2020, Douglass always finds a place to cook no matter where he goes. And he’s gone to a lot of places. From Paris and Thailand to New York and Boston, fifteen years of global experience informs every meal he makes for you. He’s not shy and you shouldn’t be either. Stop by and say hello, hugs and handshakes are mandatory.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeOwner