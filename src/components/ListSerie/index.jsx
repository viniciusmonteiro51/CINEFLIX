import styles from './styles.module.css'
import { useEffect ,useState } from "react"
import Serie from '../Serie'
import axios from 'axios'

export default function ListSerie(){
 
    const [series, setSeries] = useState([])

    useEffect(() => {

        axios.get('http://localhost:1337/Serie')
            .then(resultado => setSeries(resultado.data))
    }, [])

    return(
        <>
            <div>
            {series.map(e =>
                <Serie
                id={e.id}
                Imagem={e.Imagem}
                Titulo={e.Titulo}
                />
                )}
            </div>    
        </>
        )
}