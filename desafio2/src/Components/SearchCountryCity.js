import styles from './Search.module.css';
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
        <div className={styles.selecters}>

            <h2>Quase lá...</h2>

            {/*Country */}
            <Select isMulti options={country}
            className={styles.select}
            placeholder='Países'
            isSearchable={true}/>

            {/*Cities */}
            <Select is isMulti options={city}
            className={styles.select}
            placeholder='Cidades'
            isSearchable={true}/>

            <button>Finalizar</button>
        </div>

    )
}

export default SearchContryCity