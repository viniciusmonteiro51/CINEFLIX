import styles from './styles.module.css'
import Link from 'next/link'

export default function Cabecario(){
    return(
        <>
        <div className={styles.container}>
            <div className={styles.subcontainer}>
                <div className={styles.serie}>
                    <h1>Minhas</h1>
                    <h2>Séries</h2> 
                </div>
                <div>
                    <Link href='/'>POPULARES</Link>
                </div>
                <div>
                    <Link href='/'>MAIS BEM AVALIADAS</Link>
                </div>
                <div>
                    <Link href='/'>NA TV</Link>
                </div>
            </div>
        </div>
        </>
    )
}