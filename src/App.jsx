import { useState } from "react";

import Formulario from "./components/FormIMC";
import ResultadoImc from "./components/ResultadoIMC";
import styles from './App.module.css';


function App() {
  const [resultado, setResultado] = useState(null);
  
  function calcularIMC({ peso, altura }) {
    const alturaEmMetros = altura / 100;
    const imc = Number(peso) / (Number(alturaEmMetros) * Number(alturaEmMetros));

    let classificacao;
    
      if (imc < 18.5) {
        classificacao = "Abaixo do peso";
      } else if (imc < 25) {
        classificacao = "Normal";
      } else if (imc < 30) {
        classificacao = "Sobrepeso";
      } else {
        classificacao = "Obesidade";
      }

    setResultado({
      imc,
      classificacao
    })
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.card}>
          <Formulario aoCalcular={calcularIMC} />
        <ResultadoImc resultado={resultado} />
        </div>
      </div>
    </>
  )
}

export default App
