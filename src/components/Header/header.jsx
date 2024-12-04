import logolivro from "../../assets/images/logolivro.png"
import busca from "../../assets/images/busca.png"
import { BrowserRouter, Route, Routes, Link } from "react-router-dom"
import Inicio from "../../Pages/Inicio/inicio"
import LivrosDoados from "../../Pages/LivrosDoados/livrosdoados"
import QueroDoar from "../../Pages/QueroDoar/querodoar"
import S from './header.module.scss'

export default function header () 
{
    return (
      <BrowserRouter>
      
    <header>
      <section className={S.boxLogo}>
      <img src={logolivro} alt="imagem de um livro"/>
      <h1>Livros Vai Na Web</h1>
      </section>

      <nav className={S.boxMenu}>
        <ul>
          <li><Link to="/">Início</Link></li>
          <li><Link to="/LivrosDoados">LivrosDoados</Link></li>
          <li><Link to="/QueroDoar">QueroDoar</Link></li>
        </ul>
      </nav>

      <div className={S.boxSearch}>
        <input className={S.boxInput} type="text" placeholder="O que você procura?"/>
        <img src={busca} alt="imagem de uma lupa" />
      </div>
    </header>
    
    <Routes>
      <Route path="/" element={<Inicio/>}/>
      <Route path="/LivrosDoados" element={<LivrosDoados/>}/>
      <Route path="/QueroDoar" element={<QueroDoar/>}/>
    </Routes>
    </BrowserRouter>
    )
  }