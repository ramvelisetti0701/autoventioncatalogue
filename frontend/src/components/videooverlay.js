import React, { Suspense, lazy, useState } from "react";
import { Link } from "react-router-dom";

const VideoPlayer = lazy(() => import ('./videoplayer'));

function VideoOverlay() { 
    const [isVideoOpen, setIsVideoOpen] = useState(false);
    
    function openVideo() { 
        setIsVideoOpen(true);
    }

    function closeVideo() {
        setIsVideoOpen(false);
    }

    return (
        <div>
            {isVideoOpen && (
                <div className="overlay">
                    <div className="video-container">
                        <Suspense fallback={<div>Loading...</div>}>
                            <VideoPlayer />
                        </Suspense>
                        <button onClick={closeVideo}>Close Video</button>
                    </div>
                </div>
            )}
        </div>
    );

};

export default VideoOverlay;
