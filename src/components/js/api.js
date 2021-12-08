const getCarPart = async (partName) => {
    const response = await fetch(
        `https://api.airtable.com/v0/appYj9f1YThzVwfnD/${partName}?api_key=key9UItv1zOIxkpng`
    );
    return await response.json();
};

export { getCarPart };
