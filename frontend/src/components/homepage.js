import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
/* import ImageGrid from './imagegrid'; */
//import { useState } from 'react';
import fallbackData from '../fallbackdata/processAreas.json';

function HomePage() {
    
    const [processAreas, setProcessAreas] = useState([]);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                console.log("== BEFORE FETCH ==");
                const data = await fetch(`http://localhost:4000/processAreas`);

                if (!data.ok) {
                    throw new Error('Fetch failed');
                }

                console.log("== AFTER FETCH ==");
                const items = await data.json();
                console.log('ProcessArea' + items);
                setProcessAreas(items);
            } catch (error) {
                console.log('Fetch error : ', error);
                //const fallbackData = require('../fallbackdata/processAreas.json');
                setProcessAreas(fallbackData);
            }
        };

        fetchItems();
    }, []);
    
    return (
        <div>
            <h1>Autovention eCatalogue</h1>
            <br></br><br></br><br></br>
            <div className="image-grid">
                {processAreas.map((pArea) => (
                    <Link key={pArea.processArea} to={`/characters/${pArea.processArea}`}>
                        <img src={pArea.imageSrc} alt={pArea.processArea} /> {pArea.processArea}
                    </Link>
                ))}
            </div>
        </div>
    );
}
export default HomePage;