import styles from './Dados.module.css';
import { Link } from 'react-router-dom'

const Dados = () => {


    const handleSubmit = (e) => {

        e.preventDefault();

    }

    return (
        <div className={styles.Container}>
            {/*Formulário para coletar informações pessoais*/}

            <h2>Welcome</h2>
            <form className={styles.formulario} onSubmit={handleSubmit}>


                <label>

                    <input type='text'
                        name='displayname'
                        required
                        placeholder='insira seu nome'
                    />


                    <input type='email'
                        name='email'
                        required
                        placeholder='insira seu melhor email'
                    />


                    <input type='tel'
                        name='phone'
                        required
                        placeholder='+55 (00) 00000-0000'
                    />


                    <input type='number'
                        name='cpf'
                        required
                        placeholder='000.000.000-00'
                    />

                    <Link to='/places'><button>Proseguir</button></Link>
                </label>


            </form>
        </div>
    )
    }
export default Dados
