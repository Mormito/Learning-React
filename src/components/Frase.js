import styles from './Frase.module.css'

function Frase(){
    return(
    <div className={styles.fraseContainer}>
        <h3 className={styles.fraseContent}>Eu sou uma frase flutuante.</h3>
    </div>
    )
}


export default Frase