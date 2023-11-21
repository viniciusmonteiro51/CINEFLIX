import { useState, useEffect } from 'react'
import styles from './styles.module.css'
import axios from 'axios'
import { useRouter } from "next/router";

export default function Series() {
    const [series, setSeries] = useState({})
    const router = useRouter()

    useEffect(() => {
        const seriesData = async () => {
            try {
                const id = router.query.id
                if (id) {
                    const resultado = await axios.get(`http://localhost:1337/api/series/${id}`)
                    setSeries(resultado.data.data.attributes)
                    console.log(resultado.data)
                }
            } catch (error) {
                console.log(error)
            }
        }

        seriesData()
    }, [router.query.id])

    return (
        <>
            <p>{series?.titulo}</p>
        </>
    )
}