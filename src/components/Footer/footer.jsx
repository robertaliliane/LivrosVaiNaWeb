import S from './footer.module.scss'
import facebook from '../../assets/images/facebook.png'
import instagram from '../../assets/images/instagram.png'
import linkedin from '../../assets/images/linkedin.png'
import twitter from '../../assets/images/Twitter.png'
import youtube from '../../assets/images/youtube.png'


export default function footer () {

    return (
    <footer>
        <section className={S.boxSocial}>
        <h3>4002-8922</h3>
        <nav>
   <a href="">  <img src={facebook} alt="logo do facebook" />  </a>
   <a href="">  <img src={twitter} alt="logo do Twitter" />  </a>
   <a href="">  <img src={youtube} alt="logo do youtube" /> </a>
   <a href="">  <img src={linkedin} alt="logo do linkedin" />  </a>
   <a href="">  <img src={instagram} alt="logo do instagram" />  </a>
                </nav>
            </section>
            <section className={S.boxTexto}>
              <p>Layout desenvolvido pela Vai Na Web para fins educativos - 2024</p>
            </section>
        </footer>
    )
}

 