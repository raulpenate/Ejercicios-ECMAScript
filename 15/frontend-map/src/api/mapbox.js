const accessToken = process.env.API_KEY

export function getCoordinates(locationName) {
    return new Promise((resolve, reject) => {
        const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(locationName)}.json?access_token=${accessToken}`;

        fetch(url)
            .then(response => response.json())
            .then(data => {

                const coordinates = data.features[0].center;
                const lat = coordinates[1];
                const lon = coordinates[0];

                resolve({ lat, lon });
            })
            .catch(error => {
                reject(error);
            });
    });
}

export const getPlaceName = async (lat,lon) => {
    const response = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${lon},${lat}.json?access_token=${accessToken}`);
    const data = await response.json();
    if (data && data.features && data.features.length > 0) {
        return data.features[0].place_name;
    } else {
        return "No se encontro lugar";
    }
};