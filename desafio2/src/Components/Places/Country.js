
//hooks
import { useEffect, useState } from 'react';
//imports 
import { fCities, fCountries } from '../../Data/dados';


const Country = () => {

    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);

    //Country
    useEffect(() => {
        fCountries().then((states) => {
            setStates(states)
        });
    }, []);

    //Cities
    useEffect(() => {
        fCities().then((cities) => {
            setCities(cities)
        });
    }, []);



    return (
        <form>

            {/*Contry */}
            <label htmlFor="state">País</label>
            <select id="state">
                <option value=""> Selecione um país </option>
                {states.map((state) => {
                    const { code, name } = state;
                    return (<option key={code} value={code}>{name}</option>)
                })}
            </select>


            {/*Cities */}
            <label htmlFor="city">Cidade</label>
            <select id="city">
                <option value="">Escolha uma cidade</option>
                {cities.map((city) => {
                    const { code, name } = city;
                    return (<option key={code} value={code}>{name}</option>)
                })}
            </select>

        </form>
    )
}

export default Country