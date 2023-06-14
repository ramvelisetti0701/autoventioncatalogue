import React from 'react';
import { useParams } from 'react-router-dom';

const ImagePage = () => {
    const { id } = useParams();

    return (
        <div>
            <h1>Image Page - {id}</h1>
            <div className="image-container">
                <img src={`image${id}.jpg`} alt={`Image ${id}`} />
                <div className="title-box">Title</div>
                <div className="info-box">
                    <div className="info-item">Text 1</div>
                    <div className="info-item">Text 2</div>
                </div>
                <div className="body-box">
                    <div className="body-item">Text 3</div>
                    <div className="body-item">Text 4</div>
                    <div className="body-item">Text 5</div>
                </div>
            </div>
        </div>
    );
};

export default ImagePage;
