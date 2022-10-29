import styles from './teste.module.css';
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
        <div className={styles.container}>
            {/*Formulário para coletar informações pessoais*/}
            <div className={styles.formulario}>
                <h2> Dados </h2>
                <form>
                    <input type='text'
                        name='displayname'
                        required
                        placeholder='Seu nome'
                        maxLength='50'
                        autoComplete='off' />
                    <input type='email'
                        name='email'
                        required
                        placeholder='Seu melhor email'
                        autoComplete='off'/>
                    <input type='tel'
                        name='phone'
                        required
                        placeholder='+55 (00) 00000-0000'
                        maxLength='19'
                        autoComplete='off' />
                    <input type='text'
                        id='cpf'
                        autoComplete='off'
                        maxLength='14'
                        name='cpf'
                        required
                        placeholder='000.000.000-00'
                    />
                    {/*<Link to='/places'><button>Proseguir</button></Link>*/}
                </form>
            </div>

            <div className={styles.selecters}>
                {/*Select para escolher país e cidade */}
                <h2>Destinos de interesse</h2>
                {/*Country */}
                <Select isMulti options={country}
                    className={styles.select}
                    placeholder='Países'
                    isSearchable={true} />

                {/*Cities */}
                <Select is isMulti options={city}
                    className={styles.select}
                    placeholder='Cidades'
                    isSearchable={true} />

            </div>
            <button>Enviat</button>
        </div>
    )
}
export default Teste
