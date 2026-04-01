import { useState } from "react";

const Formulario = ({ aoCalcular }) => {
    let [altura, setAltura] = useState('');
    let [peso, setPeso] = useState('');

    function calcularIMC(evento) {
        evento.preventDefault();
        if (peso <= 0 || altura <= 0) 
            return;
        aoCalcular({ peso, altura });
    }

    return (
        <form onSubmit={calcularIMC}>
            <label>Qual o seu peso? </label>
            <input type="number" placeholder="Digite aqui seu peso" onChange={evento => setPeso(Number(evento.target.value))} />
            <label>Qual a sua altura? </label>
            <input type="number" placeholder="Digite aqui sua altura" onChange={evento => setAltura(Number(evento.target.value))} />
            <button type="submit">Calcular IMC</button>
        </form>
    )
}


export default Formulario;