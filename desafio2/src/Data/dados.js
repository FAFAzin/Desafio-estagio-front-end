//https://amazon-api.sellead.com/country

const BASE_URL = 'https://amazon-api.sellead.com';

export const fCountries = async () => {
    const url = `${BASE_URL}/country`;

    const response = await fetch(url);
    return await response.json();
}

export const fCities = async () => {
    const url = `${BASE_URL}/city`;

    const response = await fetch(url);
    return await response.json();
}