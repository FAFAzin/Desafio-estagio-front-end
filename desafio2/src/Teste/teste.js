import React from 'react'
//Library
import Select from 'react-select';
//hooks
import { useEffect, useState } from 'react';
//imports 
import { fCities, fCountries } from '../Data/dados'


const Teste = () => {

    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);

    // obj Countries
    useEffect(() => {
        fCountries().then((states) => {
            setStates(states)
        });
    }, []);

    //obj Cities
    useEffect(() => {
        fCities().then((cities) => {
            setCities(cities)
        });
    }, []);


   //destruct countries 
    const country = states.map(item => {
        return {
            label: item.name,
            value: item.code
        }
    })

    //destruct cities  
    const city = cities.map(item => {
        return {
            label: item.name,
            value: item.code
        }
    })



    return (
        <>
            {/*Country */}
            <Select isMulti options={country}/>

            {/*Cities */}
            <Select is isMulti options={city}/>
        </>

    )
}

export default Teste