import { useState, useEffect } from 'react'
import styles from './styles.module.css'
import axios from 'axios'
import { useRouter } from "next/router";
import Head from 'next/head';

export default function Series() {
    const [series, setSeries] = useState()
    const router = useRouter()

    useEffect(() => {
        const seriesData = async () => {
            try {
                const id = router.query.id
                if (id) {
                    const resultado = await axios.get(`http://localhost:1337/api/series/${router.query.id}?populate=*`)
                    setSeries(resultado.data.data)
                    console.log(resultado.data)
                }
            } catch (error) {
                console.log(error)
            }
        }

        seriesData()
    }, [router.query.id])

    if (series) return (
        <>
            <Head>
                <title>{series?.attributes.titulo}</title>
            </Head>

            <main className={styles.containerPai}>

                <section className={styles.containerTamanho}>
                    <img className={styles.capaFundo} src={"http://localhost:1337" + series.attributes.capa_fundo.data.attributes.url} />

                    <div className={styles.infos}>
                        <img className={styles.capa} src={"http://localhost:1337" + series.attributes.capa.data.attributes.url} />

                        <div className={styles.containerInfos}>
                            <div className={styles.titulos}>
                                <div className={styles.tituloTemporada}>
                                    <h1>{series.attributes.titulo}</h1>
                                    <p>{series.attributes?.temporadas ? series.attributes.temporadas + " temporadas" : ""}</p>
                                </div>
                                <div className={styles.infos}>
                                    <p>{series.attributes?.classificacao + " | "}</p>
                                    <p>{series.attributes.genero_principal}</p>
                                    <p>{series.attributes.genero_secundario}</p>
                                </div>

                                <div className={styles.infosDesc}>
                                    <p className={styles.desc}>
                                        {series.attributes.descricao}
                                    </p>
                                    <p>
                                        <strong>
                                            Idioma Original:
                                        </strong>
                                        {series.attributes.idioma}
                                    </p>
                                </div>

                            </div>
                            <div className={styles.containerAvaliacao}>
                                <p><strong>Avaliação dos usuários:</strong></p>
                                <div className={styles.containerProgressResult}>
                                    <progress
                                        className={styles.progressAvaliacao}
                                        value={Number(series.attributes.avaliacoes_positivas) - Number(series.attributes.avaliacoes_negativas)}
                                        max={Number(series.attributes.avaliacoes_positivas) + Number(series.attributes.avaliacoes_negativas)}>
                                    </progress>
                                    <p>{(((Number(series.attributes.avaliacoes_positivas) - Number(series.attributes.avaliacoes_negativas)) / (Number(series.attributes.avaliacoes_positivas) + Number(series.attributes.avaliacoes_negativas))) * 100).toFixed(2) + "%"}</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
            </main>
        </>
    )
}