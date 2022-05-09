import * as React from 'react';
import { useState, useEffect } from 'react';
import Preloader from './preloader';
import Select from './Select';
import Partlist from './Partlist';
import Schema from './Scheme';
import Search from './Search';
import cn from 'classnames';
import {
    cataloglist__wrap,
    cataloglist_btn,
    cataloglist_btn__wrap,
    cataloglist_btn__hide,
} from './cataloglist.module.scss';

const CatalogList = () => {
    const [parts, setParts] = useState([]);
    const [error, setError] = useState(true);
    const [load, setLoad] = useState(true);
    const [btnName, setBtnName] = useState('mufflers');
    const [allData, setAllData] = useState([]);
    const [counter, setCounter] = useState(1);
    const [clicker, setClicker] = useState(true);
    const [btnOff, setBtnOff] = useState(false);

    const qs = require('qs');

    const strapiAPI = `https://strapi.ostkost.ru/api`;

    const query = qs.stringify(
        {
            fields: ['name', 'type', 'vendor', 'soldOut', 'partNumber'],
            populate: {
                image: {
                    fields: ['name', 'url', 'formats'],
                },
            },
            pagination: {
                page: 1,
                pageSize: 729,
            },
        },

        {
            encodeValuesOnly: true,
        }
    );
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`${strapiAPI}/${btnName}?${query}`);
            const data = await response.json();

            if (data.data) {
                setAllData(data.data);
                setParts(handleAllData(data.data));
                setError(false);
                setLoad(false);
                setCounter(1);
                setBtnOff(false);
            } else if (data.error || !data.attributes) {
                setParts([]);
                setError(true);
                setLoad(false);
            }
        };
        fetchData().catch((err) => {
            console.error(err);
            setError(true);
            setLoad(true);
        });
    }, [btnName, clicker]);

    useEffect(() => {
        setError(true);
        setLoad(true);
        if (allData) {
            setError(false);
            setLoad(false);
            setParts(handleAllData(allData));
        } else if (allData.error || !allData.attributes) {
            setParts([]);
            setError(true);
            setLoad(false);
        }
    }, [allData.length, counter]);

    const handleBtnOff = (dData) => {
        console.log(parts.length, allData.length);
        if (parts.length === allData.length && allData.length !== 0) {
            setBtnOff(true);
            console.log('setBtnOff', 'true', btnOff);
        } else {
            console.log('setBtnOff', 'false', btnOff);
            setBtnOff(false);
        }
    };

    const onScroll = (e) => {
        console.log('scroll');
    };

    const handleAllData = (data) => {
        const perPage = 3;
        let increment = perPage * counter;
        console.log('#####handleAllData####:', increment);
        return data.slice(0, increment);
    };

    const handleSearch = (str) => {
        searchByName(str);
    };

    const searchByName = (str) => {
        if (
            allData.filter((partName) => {
                return (
                    partName.attributes.partNumber.toLowerCase().indexOf(str.toLowerCase()) !== -1
                );
            }).length !== 0
        ) {
            setParts(
                allData.filter((partName) => {
                    return (
                        partName.attributes.partNumber.toLowerCase().indexOf(str.toLowerCase()) !==
                        -1
                    );
                })
            );
            setBtnOff(true);
        } else
            setParts(
                allData.filter((partName) => {
                    return partName.attributes.name.toLowerCase().indexOf(str.toLowerCase()) !== -1;
                })
            );
        setBtnOff(true);
    };
    const filteredByAssembler = (str) => {
        console.log(str);
        setParts(
            allData.filter((assembler) => {
                return assembler.attributes.type.toLowerCase().indexOf(str.toLowerCase()) !== -1;
            })
        );
        setBtnOff(true);
    };

    // const newFiltration = (rawData, str) => {
    //     rawData.filter((unit) => {
    //         return unit.fields.Name.toLowerCase().includes(str.toLowerCase());
    //     });
    // };

    return (
        <div>
            <div className={cataloglist__wrap}>
                <Select btnName={btnName} setBtnName={setBtnName} setClicker={setClicker} />
                <Search btnName={btnName} cb={handleSearch} />
                <Schema btnName={btnName} setBtnName={setBtnName} setClicker={setClicker} />
            </div>
            <button
                onClick={() => console.log('parts length', parts.length)}
                className={cn(cataloglist_btn)}
            >
                TEST
            </button>
            {load ? (
                <Preloader />
            ) : (
                <Partlist
                    parts={parts}
                    errorLoad={error}
                    filteredByAssembler={filteredByAssembler}
                />
            )}
            <div className={cataloglist_btn__wrap}>
                <button
                    onClick={() => setCounter((prev) => prev + 1)}
                    className={cn(cataloglist_btn, { [cataloglist_btn__hide]: btnOff })}
                >
                    Загрузить ещё
                </button>
            </div>
        </div>
    );
};

export default CatalogList;
