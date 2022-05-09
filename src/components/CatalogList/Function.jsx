useEffect(() => {
    console.log('######USE__EFFECT######');
    setError(true);
    setLoad(true);

    fetch(`${strapiAPI}/${btnName}?${query}`)
        .then((response) => response.json())
        .then((data) => {
            if (data.data) {
                let bigData = data.data;
                //setParts(data.data);
                setAllData(bigData);
                setParts(bigData.slice(0, counter * perPage));
                setError(false);
                setLoad(false);
            } else if (data.error || !data.attributes) {
                setParts([]);
                setError(true);
                setLoad(false);
            }
        })

        .catch((err) => {
            console.error(err);
            setError(true);
            setLoad(true);
        });
}, []);

let selectParts = (partName) => {
    const perPage = 3;
    setBtnName(partName);
    setLoad(true);
    fetch(`${strapiAPI}/${partName}?${query}`)
        .then((response) => response.json())
        .then((data) => {
            if (data.data) {
                let bigData = data.data;
                //setParts(data.data);
                setAllData(bigData);
                setParts(bigData.slice(0, counter * perPage));
                setError(false);
                setLoad(false);
            } else if (data.error || !data.attributes) {
                setParts([]);
                setError(true);
                setLoad(false);
            }
        });
};

//////////////////////////////////////////////

useEffect(() => {
    console.log('######USE__EFFECT######');
    setError(true);
    setLoad(true);

    fetch(`${strapiAPI}/${btnName}?${query}`)
        .then((response) => response.json())
        .then((data) => {
            console.log('data.data:', data.data);
            setParts(data.data);
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
    const perPage = 3;
    console.log('####partName####:', partName);
    console.log('handleAllData', handleAllData());
    console.log('allData', allData);
    setBtnName(partName);
    setLoad(true);
    fetch(`${strapiAPI}/${partName}?${query}`)
        .then((response) => response.json())
        .then((data) => {
            if (data.data) {
                let bigData = data.data;
                //setParts(data.data);
                setAllData(bigData);
                setParts(bigData.slice(0, counter * perPage));
                setError(false);
                setLoad(false);
            } else if (data.error || !data.attributes) {
                setParts([]);
                setError(true);
                setLoad(false);
            }
        });
};
