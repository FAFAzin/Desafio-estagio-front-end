import styles from './Localizacao.module.css';

import { useState } from 'react';


const Localizacao = () => {

    const [pais, setPais] = useState('');
    const [cidade, setCidade] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const user = {
            pais,
            cidade
        }
        console.log(user)

        //Limpeza de formulário
        setCidade(''),
        setPais('')
        };
        
  return (
    <div>
        <h1>Local</h1>
        <form onSubmit={handleSubmit}>
            <label>
                <span>País</span>
                <input type='text' 
                name='pais'
                required
                placeholder='selecione os paises'
                />
            </label>

            <label>
                <span>Cidade</span>
                <input type='text' 
                name='cidades'
                required
                placeholder='selecione as cidades'
                />
            </label>

            <button className='btn'>Finalizar</button>

        </form>
    </div>
  )
}

export default Localizacao