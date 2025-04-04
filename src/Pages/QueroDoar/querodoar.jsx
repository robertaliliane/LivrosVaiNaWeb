import S from './querodoar.module.scss'
import livro from '../../assets/images/livro.png'
import axios from 'axios'
import {useState} from 'react'

export default function QueroDoar(){

 const [titulo, setTitulo] = useState("")
 const [categoria, SetCategoria] = useState("")
 const [autor, SetAutor] = useState("")
 const [imagem_url, SetImagem_url] = useState("")

 const enviarDados= async()=>{

 const urlApi = "https://desafio-api2.onrender.com/doar"

 const dadosEnviar = {
    titulo, 
    categoria,
    autor,
    imagem_url
 }

await axios.post(urlApi,dadosEnviar)

alert('Livro enviado')

setTitulo("")
SetCategoria("")
SetAutor("")
SetImagem_url("")

 }


const capturaTitulo = (e) =>{
    setTitulo(e.target.value)
}

const capturaCategoria = (e) =>{
    SetCategoria(e.target.value)
}

const capturaAutor = (e) =>{
    SetAutor(e.target.value)
}

const capturaImagem = (e) =>{
    SetImagem_url(e.target.value)
}

    return(
        <section className={S.principal}>
            <section className={S.container}>
                <h2>Por favor, preencha o formulário com suas informações e as informações do Livro</h2>
                <form onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <img src={livro} alt="icone de um livro" />
                    <h3>Informações do Livro</h3>
                    </div>  
                    <input type="text" placeholder='Titulo' onChange={capturaTitulo} value={titulo} />
                    <input type="text" placeholder='Categoria' onChange={capturaCategoria} value={categoria}/>
                    <input type="text" placeholder='Autor' onChange={capturaAutor} value={autor} />
                    <input type="text" placeholder='Link da Imagem' onChange={capturaImagem} value={imagem_url} />
                    <input type="submit" value="Doar" onClick={enviarDados} />
                </form>
            </section>
        </section>
    )
}