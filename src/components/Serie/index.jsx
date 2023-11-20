import { useState } from 'react'
import styles from './styles.module.css'
import Link from 'next/link'
import Image from 'next/image'
export default function Serie({id, titulo, capa}){
    
  
    return(
        <>
        <Link href={`/serie/${id}`}>
            <div className={styles.container}>
                <div>
                    <h1>{titulo}</h1>
                    <Image 
                    src={capa} 
                    alt={titulo} 
                    width={500} 
                    height={300} 
                    />
                </div>
            </div>
        </Link>
        </>
    )
}