const axios = require('axios');
const yargs = require('yargs');

const accessToken = 'pk.eyJ1IjoicmF1bHBlbmF0ZSIsImEiOiJjbGgwcXU2eXQwdzVhM21wamwyYjFjZmcwIn0.Wsde-dmrmw835a3W6okEdg';

const argv = yargs
    .option('address', {
        alias: 'a',
        description: 'Dirección para encontrar',
        type: 'string',
        demandOption: true
    })
    .help()
    .alias('help', 'h')
    .argv;

async function geocode(address) {
    try {
        const response = await axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json`, {
            params: {
                access_token: accessToken
            }
        });

        if (response.data.features.length > 0) {
            const location = response.data.features[0];
            console.log('Direccion:', location.place_name);
            console.log('Coordenadas:', location.geometry.coordinates);
        } else {
            console.log('No se encontro la dirección');
        }
    } catch (error) {
        console.error('Error al obtener la ubicación:', error.message);
    }
}

// Example usage:
geocode('1600 Amphitheatre Parkway, Mountain View, CA');
