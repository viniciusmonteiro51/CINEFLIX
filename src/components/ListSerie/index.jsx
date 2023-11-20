import styles from './styles.module.css'
import { useEffect ,useState } from "react"
import Serie from '../Serie'
import axios from 'axios'
import Image from 'next/image'

export default function ListSerie(){
 
    const [series, setSeries] = useState([]);
  
    const pushSeries = async () =>{
        try {
            const res = await axios.get('http://localhost:1337/api/series?populate=capa');
            setSeries(res.data.data)
            console.log(res.data);
            } catch (error) {
                console.log(error);
            }
    }

//data.data.id
    useEffect(() =>{
        pushSeries();
    }, []);

    return(
        <>
            <div>
            {series?.map((serie) =>
                <Serie
                key={serie.id}
                titulo={serie.attributes.titulo}
                capa={serie.attributes.capa.data.attributes.url}
                />
                )}
            </div>    
        </>
        )
}