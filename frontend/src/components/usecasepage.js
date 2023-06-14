import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import VideoOverlay from './videooverlay';
import fallbackData from '../fallbackdata/useCases.json';

function UseCasePage() {

    const { character } = useParams();

    console.log("Character : " + character);

    const filteredFallbackData = fallbackData.filter(useCase => useCase.character === character);

    const [useCaseByCharacter, setuseCaseByCharacter] = useState([]);
    
    const [isVideoOpen, setIsVideoOpen] = useState(false);

    useEffect(() => {
        /* async function fetchData() { 
            try {
                console.log("== BEFORE Call ==");
                const data = await fetch(`http://localhost:4000/useCases/${character}`);

                if (!data.ok) {
                    throw new Error('Fetch failed');
                }

                console.log("== AFTER Call ==");
                const items = await data.json();
                console.log('UseCaseByCharacter : ' + items[0].character);
                setuseCaseByCharacter(items[0]);
            } catch (error) {
                console.log('Fetch error : ', error);
                //const fallbackData = require('../fallbackdata/useCases.json'); */

                console.log("Filtered Data Length : " + filteredFallbackData.length);
                setuseCaseByCharacter(filteredFallbackData[0]);
            /* }
        }
        fetchData(); */
    }, [filteredFallbackData]); 

    function openVideoOverlay(){ 
        setIsVideoOpen(true);
    };

    /* const [showOverlay, setShowOverlay] = useState(false);

    const [showVideoOverlay, setShowVideoOverlay] = useState(false);

    const handleIconClick = () => {
        setShowOverlay(true);
    };

    const handleTitleClick = () => {
        setShowVideoOverlay(true);
    };

    const closeOverlay = () => {
        setShowOverlay(false);
        setShowVideoOverlay(false);
    };
    */

   {/*  const ImageOverlay = () => (
        <div className="overlay">
            {/* Image Overlay Content */}
            {/* <div className="close-btn" onClick={closeOverlay}>Close</div>
        </div>
    ); */}

    {/* const VideoOverlay = () => (
        <div className="overlay">
            {/* Video Overlay Content */}
            {/* <div className="close-btn" onClick={closeOverlay}>Close</div>
        </div>
    ); */}

    return ( 
        <div>
            <div>
                <h1>{character}</h1>
                <div className="image-title-container">
                    <div className="image-container">
                        <img src={useCaseByCharacter.botImageSrc} alt={useCaseByCharacter.character} />
                    </div>
                    <div className="title-info-container">
                        <div className="title-box">
                            <h2>{useCaseByCharacter.name}</h2>
                        </div>
                        <div className="info-container">
                            <div className="info-box">
                                <h2>{useCaseByCharacter.processArea}</h2>
                            </div>
                            <div className="info-box">
                                <h2>{useCaseByCharacter.rpaToolUsed}</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
            <div className="body-container">
                <div className="body-box">
                    <div className="body-item">
                        <p><b>Process Scenario : </b> {useCaseByCharacter.processScenario}</p>
                    </div>
                    <div className="body-item">
                        <p><b>As-Is Process : </b> {useCaseByCharacter.summaryAsIsProcess}</p>
                    </div>
                    <div className="body-item">
                        <p><b>Functionality : </b> {useCaseByCharacter.automationScope}</p>
                    </div>
                    <div className="body-item">
                        <p><b>SAP Process Flow : </b> </p>
                    </div>
                    <div className="body-item">
                        <p><b>Process Map : </b> <img alt='Captain America' className='icon' src='/images/processFlows/icons/CaptainAmerica.ico' onClick={openVideoOverlay} /> </p>
                    </div>
                </div>
                {isVideoOpen && <VideoOverlay/>}
                {/* {showOverlay && <ImageOverlay />}

                {showVideoOverlay && <VideoOverlay />} */}
            </div>
        </div>
        
    );
};
export default UseCasePage;