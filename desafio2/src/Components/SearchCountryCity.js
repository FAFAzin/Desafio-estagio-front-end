import styles from './SearchContryCity.module.css';
//Library
import Select from 'react-select';
//hooks
import { useEffect, useState } from 'react';
//imports 
import { fCities, fCountries } from '../Data/dados'


const SearchContryCity = () => {

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
            <Select isMulti options={country}
            className={styles.Select}/>

            {/*Cities */}
            <Select is isMulti options={city}
            className={styles.Select}/>
        </>

    )
}

export default SearchContryCity