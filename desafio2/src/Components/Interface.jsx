//estilo
import styles from './interface.module.css'
//react-hook
import { useForm } from "react-hook-form";
import { object, string } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'
//Library
import Select from 'react-select';
//hooks
import { useEffect, useState } from 'react';
//imports 
import { fCities, fCountries } from '../Data/dados'




//validação dos campos em branco
const schema = object({
    name: string().required('Campo Obrigatório*').min(3, 'O nome deve conter no mínimo 3 caracteres'),
    email: string().required('Campo Obrigatório*'),
    tel: string().required('Campo Obrigatório*'),
    cpf: string().required('Campo obrigatório*').min(11, 'cpf inválido')
})





const Interface = () => {

    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);

    // obj Countries
    useEffect(() => { fCountries().then((states) => { setStates(states) }) }, []);
    //obj Cities
    useEffect(() => { fCities().then((cities) => { setCities(cities) }); }, []);
    //destruct countries 
    const country = states.map(item => { return { label: item.name, value: item.code } });
    //destruct cities  
    const city = cities.map(item => { return { label: item.name, value: item.code } });
    //tratar validações e envio do form
    const { register, handleSubmit: onSubmit, watch, formState: { errors } } = useForm({ resolver: yupResolver(schema) });
    //receber dados 
    const handleSubmit = (data) => { console.log(data) }

    return (
        <form onSubmit={onSubmit(handleSubmit)}>
            <div className="from-group">
                {/* Nome */}
                <input type="text"
                    autoComplete='off'
                    id="name"
                    placeholder='Seu nome'
                    {...register('name')} />
                <div className={styles.error}><span>{errors?.name?.message}</span></div></div>
            <div className="form-group">
                {/* Email */}
                <input type="email"
                    autoComplete='off'
                    id="email"
                    placeholder='Seu melhor email'
                    {...register('email')} />
                <div className={styles.error}><span>{errors?.email?.message}</span></div></div>
            <div className="form-group">
                {/* Telefone */}
                <input type="tel"
                    autoComplete='off'
                    placeholder='+55 (00) 0 0000-0000'
                    id="tel" maxLength={19} {...register('tel')} />
                <div className={styles.error}><span>{errors?.tel?.message}</span></div></div>
            <div className="form-group">
                {/* Cpf */}
                <input type="text"
                    autoComplete='off'
                    placeholder='000.000.000-00'
                    name="cps"
                    id="cpf"
                    maxLength={11}
                    {...register('cpf')} />
                <div className={styles.error}><span>{errors?.cpf?.message}</span></div></div>
            <div className={styles.selecters}>
                {/*Country */}
                <Select isMulti options={country}
                    className={styles.select}
                    name='options'
                    placeholder='Países de interesse'
                    isSearchable={true} />
                {/*Cities */}
                <Select is isMulti options={city}
                    className={styles.select}
                    name='options'
                    placeholder='Cidades de interesse'
                    isSearchable={true} />
            </div>
            <button type='submit'>Enviar</button>
        </form>
    )
}
export default Interface
