import React from 'react';

function VideoPlayer() { 
    return (
        <div>
            <video controls>
                <source src='../processMaps/CaptainAmerica.mp4' type='video/mp4'/>
            </video>
        </div>
    );
};

export default VideoPlayer;