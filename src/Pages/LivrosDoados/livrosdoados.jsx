import S from './livrosdoados.module.scss'
import livroprotagonista from '../../assets/images/livroprotagonista.png'

export default function LivrosDoados (){
    return(
    <section className={S.boxLivrosDoados}>
        <h2>Livros Doados</h2>
        <section className={S.boxCard}>
                <article>
                    <img src={livroprotagonista} alt="imagem de um livro que se chama o protagonista" />
                    
                    <h3>O Protagonista</h3>
                    <p>Susanne Andrade</p>
                    <p>Ficção</p>
                    
                </article>
                </section>
        </section>
    )
}