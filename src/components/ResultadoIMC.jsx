const ResultadoImc = ({ resultado }) => {
    if (!resultado) {
        return null;
    }

    return (
        <div>
            <h2>Seu IMC é:</h2>
            <p>{resultado.imc.toFixed(2)}</p>
            <p>{resultado.classificacao}</p>
        </div>
    )
}

export default ResultadoImc;