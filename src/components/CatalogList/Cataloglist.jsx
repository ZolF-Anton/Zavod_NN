import * as React from 'react';
import { useState, useEffect } from 'react';
import Preloader from './preloader';
import Select from './Select';
import Partlist from './Partlist';
import Schema from './Scheme';
import Search from './Search';
import { cataloglist__wrap } from './cataloglist.module.scss';

const CatalogList = () => {
    const [parts, setParts] = useState([]);
    const [error, setError] = useState(true);
    const [load, setLoad] = useState(true);
    const [btnName, setBtnName] = useState('muffler');
    const [filteredCatalog, setFilteredCatalog] = useState([]);

    //const { pathname, search } = useLocation();
    //const { push } = useHistory();

    useEffect(() => {
        setError(true);
        setLoad(true);

        fetch(`https://api.airtable.com/v0/appYj9f1YThzVwfnD/${btnName}?api_key=key9UItv1zOIxkpng`)
            .then((response) => response.json())
            .then((data) => {
                setParts(filteredCatalog.length >= 1 ? filteredCatalog : data.records);
                setError(false);
                setLoad(false);
            })

            .catch((err) => {
                console.error(err);
                setError(true);
                setLoad(true);
            });
    }, [filteredCatalog]);
    // useEffect(() => {
    //     setError(true);
    //     setLoad(true);

    //     fetch(`https://api.airtable.com/v0/appYj9f1YThzVwfnD/${btnName}?api_key=key9UItv1zOIxkpng`)
    //         .then((response) => response.json())
    //         .then((data) => {
    //             setParts(data.records);
    //             setError(false);
    //             setLoad(false);
    //         })

    //         .catch((err) => {
    //             console.error(err);
    //             setError(true);
    //             setLoad(true);
    //         });
    // }, []);

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

    const handleSearch = (str) => {
        handleFilteredCatalog(str);
        filteredParts();
    };

    const handleFilteredCatalog = (str) => {
        setFilteredCatalog(
            parts.filter((unit) => {
                return unit.fields.Name.toLowerCase().includes(str.toLowerCase());
            })
        );
    };

    const filteredParts = () => {
        if (filteredCatalog) {
            setParts(filteredCatalog);
            setError(false);
            setLoad(false);
        } else if (!filteredCatalog) {
            setParts([]);
            setError(true);
            setLoad(false);
        }
        console.log('xxxxxxxxxxxxxxxxxfilteredCatalog', filteredCatalog);
    };
    console.log('000000000000000filteredCatalog', filteredCatalog);
    return (
        <div>
            <div className={cataloglist__wrap}>
                <Select selectParts={selectParts} btnName={btnName} />
                <Search selectParts={selectParts} btnName={btnName} cb={handleSearch} />
                <Schema selectParts={selectParts} btnName={btnName} />
            </div>
            {load ? <Preloader /> : <Partlist parts={parts} errorLoad={error} />}
        </div>
    );
};

export default CatalogList;

//  parts.filter((unit) => {
//                 return unit.fields.Name.toLowerCase().includes(str.toLowerCase());

//                 //return unit.fields.Name.length > 22;
//                 //return unit.fields.Name.toLowerCase().indexOf(str.toLowerCase()) !== -1;
//             })
// push({
//     pathname,
//     search: `?search=${str}`,
// }

// let selectDefilteredParts = (str) => {
//     console.log('#####parts:', parts);
//     setLoad(true);
//     fetch(`https://api.airtable.com/v0/appYj9f1YThzVwfnD/${btnName}?api_key=key9UItv1zOIxkpng`)
//         .then((response) => response.json())
//         .then((data) => {
//             if (data.records) {
//                 setParts(newFiltration(data.records, str));
//                 setError(false);
//                 setLoad(false);
//             } else if (!data.records && data.error === 'Parts not found!') {
//                 setParts([]);
//                 setError(true);
//                 setLoad(false);
//             }
//         });
//     console.log('#################parts:', parts);
// };
// const newFiltration = (rawData, str) => {
//     let partsArr = rawData.filter((unit) => {
//         return unit.fields.Name.toLowerCase().includes(str.toLowerCase());
//     });
// };
