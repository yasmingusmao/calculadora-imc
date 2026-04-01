import { useState } from "react";

import styles from './FormImc.module.css';

const Formulario = ({ aoCalcular }) => {
    let [altura, setAltura] = useState('');
    let [peso, setPeso] = useState('');

    function calcularIMC(evento) {
        evento.preventDefault();

        if (peso <= 0 || altura <= 0) {
            return;
        } 
            
        aoCalcular({ peso, altura });
    }

    return (
        <form className={styles.form} onSubmit={calcularIMC}>

            <label className={styles.label}>Qual o seu peso? </label>
            <input className={styles.input} type="number" placeholder="Digite aqui seu peso" value={peso} onChange={evento => setPeso(Number(evento.target.value))} />
            <label className={styles.label}>Qual a sua altura? </label>
            <input className={styles.input} type="number" placeholder="Digite aqui sua altura" value={altura} onChange={evento => setAltura(Number(evento.target.value))} />
            <button className={styles.button} type="submit">Calcular IMC</button>
        </form>
    )
}


export default Formulario;