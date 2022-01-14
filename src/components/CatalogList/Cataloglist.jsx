import * as React from 'react';
import { useState, useEffect } from 'react';
import Preloader from './preloader';
import Select from './Select';
import Partlist from './Partlist';
import Schema from './Scheme';
import { cataloglist__wrap } from './cataloglist.module.scss';

const CatalogList = () => {
    const [parts, setParts] = useState([]);
    const [error, setError] = useState(true);
    const [load, setLoad] = useState(true);
    const [btnName, setBtnName] = useState('catalyst');

    useEffect(() => {
        setError(true);
        setLoad(true);
        fetch(`https://api.airtable.com/v0/appYj9f1YThzVwfnD/${btnName}?api_key=key9UItv1zOIxkpng`)
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

    let selectParts = (partName) => {
        setBtnName(partName);
        setLoad(true);
        fetch(`https://api.airtable.com/v0/appYj9f1YThzVwfnD/${partName}?api_key=key9UItv1zOIxkpng`)
            .then((response) => response.json())
            .then((data) => {
                if (data.records) {
                    setParts(data.records);
                    setError(false);
                    setLoad(false);
                } else if (!data.records && data.error === 'Parts not found!') {
                    setParts([]);
                    setError(true);
                    setLoad(false);
                }
            });
    };

    return (
        <div>
            <div className={cataloglist__wrap}>
                <Select selectParts={selectParts} btnName={btnName} />
                <Schema selectParts={selectParts} btnName={btnName} />
            </div>
            {load ? <Preloader /> : <Partlist parts={parts} errorLoad={error} />}
        </div>
    );
};

export default CatalogList;
