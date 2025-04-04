import S from './livrosdoados.module.scss'
import livroprotagonista from '../../assets/images/livroprotagonista.png'
import axios from 'axios'
import { useState,useEffect } from 'react'

export default function LivrosDoados (){

const [livros, setLivros] = useState([])

const getLivros = async () => {

const response = await axios.get("https://desafio-api2.onrender.com/livros")
setLivros(response.data)


useEffect(()=>{
    getLivros()
},[])

}

    return(
    <section className={S.boxLivrosDoados}>
        <h2>Livros Doados</h2>
        <section className={S.boxcard}>
                <article>
                <img src={livroprotagonista} alt="imagem de um livro que se chama o protagonista" />
                <h3>O Protagonista</h3>
                <p>Susanne Andrade</p>
                <p>Ficção</p>
                </article>
                {livros.map((item)=>(
              <article key={item.id}>
               <img src={item.imagem_url} alt="" />
                <h3>{item.titulo}</h3>
                <p>{item.categoria}</p>
                <p>{item.autor}</p>
              </article>

                ))}


                </section>
        </section>
    )
}