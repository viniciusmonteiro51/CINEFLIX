import { useState } from 'react'
import styles from './styles.module.css'
import Link from 'next/link'

export default function Serie({id, Titulo, Imagem}){
    
  
    return(
        <>
        <Link href={`/serie/${id}`}>
            <div className={styles.container}>
                <div>
                    <h1>{Titulo}</h1>
                    <img src={Imagem}/>
                </div>
            </div>
        </Link>
        </>
    )
}