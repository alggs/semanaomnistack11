import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { FiLogIn } from 'react-icons/fi';
import './style.css';

import api from '../../services/api';

import hearoesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';

export default function Login() {
    const [id, setId] = useState('');

    const history = useHistory();

    async function handleLogin(e){
        e.preventDefault();

        try {
            const resposta = await api.post('session', { id });

            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', resposta.data.name);

            history.push('/profile')
        } catch (error) {
            alert('Falha no login, tente novamente.');
        }
    }

    return (
        <div className="login-container">
            <section className="form">
                <img src={logoImg} alt="Be The Hero" />

                <form onSubmit={handleLogin}>
                    <h1>Faça seu login</h1>

                    <input
                    placeholder="Seu ID"
                    value={id}
                    onChange={e => setId(e.target.value)}
                    />
                    <button type="submit" className="button">Entrar</button>

                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#E02041" />
                    Não tenho cadastro
                    </Link>
                </form>
            </section>
            <img src={hearoesImg} alt="heroes" />
        </div>
    );
}