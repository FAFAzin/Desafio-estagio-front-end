//import styles from './Localizacao.module.css';

import { useEffect, useState } from 'react';
import { fStates } from '../Data/dados';



const Localizacao = () => {

    const [states, setStates] = useState([]);

    useEffect(() =>  {
        fStates().then((states) => {
            setStates(states)
        });
    }, []);


    return (
        <div className="container">
            <form>
                <label htmlFor="state">País</label>
                <select id="state">
                    <option value=""> Selecione um país </option>
                    {states.map((state) => {
                        const {code, name} = state;
                        return ( <option key={code}value={code}>{name}</option>)
                    })}
                </select>


                <label htmlFor="city">Cidade</label>
                <select id="city">
                    <option value="">Escolha uma cidade</option>
                </select>
            </form>
        </div>
    );
}

export default Localizacao