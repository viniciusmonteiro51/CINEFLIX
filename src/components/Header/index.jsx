import Image from 'next/image'
import styles from './styles.module.css'
import Input from '../Input'
export default function Header() {
    return (
        <div className={styles.container}>
            <div className={styles.subcontainer}>
                <img className={styles.img}src='/interestelar.png' alt='Interstellar' layout="responsive"/>
                <div className={styles.h1}>
                  <h1>Bem vindo(a)</h1>
                  <div className={styles.busca}>
                     <Input style={{width:'933px'}} name='buscar' id='buscar' type='text'/>
                     <button>Buscar</button>
                  </div>
                 
                  
                </div>
               

            </div>
        </div>
    )
}
