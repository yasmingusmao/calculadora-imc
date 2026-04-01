import { useState } from "react";
import Formulario from "./components/FormIMC";
import ResultadoImc from "./components/ResultadoIMC";


function App() {
  const [resultado, setResultado] = useState(null);
  
  function calcularIMC({ peso, altura }) {
  const imc = Number(peso) / (Number(altura) * Number(altura));

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
    imc: imc,
    classificacao: classificacao
  })

}

  return (
    <>
      <Formulario aoCalcular={calcularIMC} />
      <ResultadoImc resultado={resultado} />
    </>
  )
}

export default App
