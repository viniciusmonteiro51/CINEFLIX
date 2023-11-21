import styles from './styles.module.css'

export default function Input({style, ...props}){
    return(
        <>
        <input  className={styles.input} style={style}{...props}/>
        </>
    )
}