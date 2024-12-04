import S from './inicio.module.scss'

import read from '../../assets/images/reading.png'
import balance from '../../assets/images/balance.png'
import network from '../../assets/images/community.png'
import trasform from '../../assets/images/transform.png'


export default function Inicio(){
    return(
        <main>
            <section className={S.Post}>

                <h2>VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO</h2>
            </section>
            <section className={S.devoDoar}>
                <div>
                    <h2>Por que devo Doar?</h2>
                </div>
                <section className={S.boxCard}>
                    <article>
                            <img src={network} alt="imagem de quatro bonecos" />
                            <p> Oferece livros a quem não tem acesso, ajudando a reduzir a exclusão social.</p>
                        </article> 
                        <article>
                            <img src={read} alt="imagem de um boneco segurando um livro" />
                            <p>Estimula o hábito da leitura e o aprendizado contínuo.</p>
                        </article>
                        <article>
                            <img src={trasform} alt="imagem de uma mão e alguns bonecos" />
                            <p>Fornece conhecimento e inspiração, permitindo que indivíduos transformem suas vidas.</p>
                        </article>
                        <article>
                            <img src={balance} alt="imagem de uma balança" />
                            <p>Garante que todos, independentemente de sua condição, tenham oportunidades de aprendizado.</p>
                    </article>
            </section>
        </section>
    </main>
        
    )
}

