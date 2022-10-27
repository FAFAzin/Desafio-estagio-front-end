import { useState } from 'react';
import styles from './Dados.module.css';

const Dados = () => {

    const [displayName, setDisplayName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [cpf, setCpf] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {

        e.preventDefault();

        setError('')

        const user = {
            displayName,
            email,
            phone,
            cpf
        }

        setDisplayName('')
        setEmail('')
        setPhone('')
        setCpf('')

        console.log(user)
    }

  return (
    <div>
        <h1>Insira seus dados</h1>
        {/*Formulário para coletar informações pessoais*/}
        <form onSubmit={handleSubmit}>
            
            <label>
                <span>Nome:</span>
                <input type='text' 
                name='displayname'
                required
                placeholder='insira seu nome'
                onChange={(e) => setDisplayName(e.target.value)}/>
            </label>
            
            <label>
                <span>Email:</span>
                <input type='email' 
                name='email'
                required
                placeholder='insira seu email'
                onChange={(e) => setEmail(e.target.value)}/>
            </label>

            <label>
                <span>Telefone:</span>
                <input type='text' 
                name='phone'
                required
                placeholder='insira seu número'
                onChange={(e) => setPhone(e.target.value)}/>
        
            </label>

            <label>
                <span>CPF:</span>
                <input type='text' 
                name='cpf'
                required
                placeholder='insira seu cpf'
                onChange={(e) => setCpf(e.target.value)}/>
            
            </label>

            <button className='btn'>Prosseguir</button>

            
        </form>
    </div>
  )
}

export default Dados