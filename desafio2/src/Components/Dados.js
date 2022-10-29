import styles from './Dados.module.css';
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { SearchCountryCity } from './SearchCountryCity'

const Dados = () => {


    //const handleSubmit = (e) => {

    //   e.preventDefault();



    //Mascara CPF
    const mascaraCpf = () => {
        let cpf = document.getElementById(cpf)
        if (cpf.value.length == 3 || cpf.value.length == 7) {
            cpf.value += '.'
        } else if (cpf.value.length == 11) {
            cpf.value += '-'
        }
    }

    return (
        <div className={styles.Container}>
            {/*Formulário para coletar informações pessoais*/}

            <h2>Bem Vindo </h2>
            <form className={styles.formulario}>
                <label>
                    <input type='text'
                        name='displayname'
                        required
                        placeholder='insira seu nome'/>
                    <input type='email'
                        name='email'
                        required
                        placeholder='insira seu melhor email'/>
                    <input type='tel'
                        name='phone'
                        required
                        placeholder='+55 (00) 00000-0000'/>
                    <input type='text'
                        id='cpf'
                        autoComplete='off'
                        maxLength='14'
                        name='cpf'
                        required
                        placeholder='000.000.000-00'
                        onKeyUp={mascaraCpf}/>

                    <button>ok</button>

                    {/*<Link to='/places'><button>Proseguir</button></Link>*/}
                </label>
            </form>

        </div>
    )
}
export default Dados
