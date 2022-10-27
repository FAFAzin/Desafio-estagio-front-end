//https://amazon-api.sellead.com/country

const BASE_URL = 'https://amazon-api.sellead.com';

export const fCountries = () => {
    const url = `${BASE_URL}/country`;

    return fetch(url).then(response => response.json());
}

export const fCities = () => {
    const url = `${BASE_URL}/city`;

    return fetch(url).then(response => response.json());
}