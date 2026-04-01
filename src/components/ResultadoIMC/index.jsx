import styles from './ResultadoImc.module.css';

const ResultadoImc = ({ resultado }) => {
    if (!resultado) {
        return null;
    }
    
    const mapaClassificacao = {
        "Abaixo do peso": styles.baixo,
        "Normal": styles.normal,
        "Sobrepeso": styles.sobrepeso,
        "Obesidade": styles.obesidade
    };

    const classeCor = mapaClassificacao[resultado.classificacao];

    return (
        <div className={styles.resultado}>
            <h2>Seu IMC é:</h2>
            <p className={styles.valor}>
                {resultado.imc.toFixed(2)}
                </p>
            <p className={`${styles.classificacao} ${classeCor}`}>
                {resultado.classificacao}
            </p>
        </div>
    )
}

export default ResultadoImc;