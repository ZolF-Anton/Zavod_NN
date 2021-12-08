import * as React from 'react';
import { useState, useEffect } from 'react';
import Preloader from './preloader';
import Search from './Search';
import Partlist from './Partlist';

const CatalogList = () => {
    const [parts, setParts] = useState([]);
    const [error, setError] = useState(true);
    const [load, setLoad] = useState(true);
    useEffect(() => {
        setError(true);
        setLoad(true);
        fetch(`https://api.airtable.com/v0/appYj9f1YThzVwfnD/mufflers?api_key=key9UItv1zOIxkpng`)
            .then((response) => response.json())
            .then((data) => {
                setParts(data.records);
                setError(false);
                setLoad(false);
            })

            .catch((err) => {
                console.error(err);
                setError(true);
                setLoad(true);
            });
    }, []);

    let searchParts = (partName) => {
        setLoad(true);
        fetch(`https://api.airtable.com/v0/appYj9f1YThzVwfnD/${partName}?api_key=key9UItv1zOIxkpng`)
            .then((response) => response.json())
            .then((data) => {
                if (data.Response === 'True') {
                    setParts(data.records);
                    setError(false);
                    setLoad(false);
                } else if (!data.records && data.Error === 'Parts not found!') {
                    setParts([]);
                    setError(true);
                    setLoad(false);
                }
            });
    };

    return (
        <div>
            <Search searchParts={searchParts} />
            {load ? <Preloader /> : <Partlist parts={parts} errorLoad={error} />}
        </div>
    );
};

export default CatalogList;
