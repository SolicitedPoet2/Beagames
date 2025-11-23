import React from 'react'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import luca from '../../assets/luca.jpg'
import marlon from '../../assets/marlon.jpg'
import henri from '../../assets/henri.png'
import instagram from '../../assets/instagram.svg'
import youtube from '../../assets/youtube.svg'
import { Link } from "react-router-dom"
var equipe = [
            {
               "foto": luca, 
               "rede": {"imagem": instagram, "link": "https://www.instagram.com/lucacostaq/", "tag": "@lucacostaq"},
               "nome": "Luca",
               "idade": "21 anos",
               "periodo": "Primeiro Período",
               "curso": "Jornalismo"
            }, 
            {
               "foto": marlon, 
               "rede": {"imagem": instagram, "link": "https://www.instagram.com/marlonvpaixao/", "tag": "@marlonvpaixao"},
               "nome": "Marlon",
               "idade": "27 anos",
               "periodo": "Primeiro Período",
               "curso": "Jornalismo"
            }, 
            {
               "foto": henri, 
               "rede": {"imagem": youtube, "link": "https://www.youtube.com/@Henri-Q-Royal", "tag": "@Henri-Q-Royal"},
               "nome": "Henrique",
               "idade": "19 anos",
               "periodo": "Primeiro Período",
               "curso": "Jornalismo"
            }];

const EmblaCarousel = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()])

  return (
    <section className="embla shadow">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <div className="embla__slide" key={index}>
                <div className="imagens">
                    <img className="carrassol" src={equipe[index]["foto"]}></img>
                    <Link to={equipe[index]["rede"]["link"]}>
                        <div className="rede-div">
                            <img className="rede" src={equipe[index]["rede"]["imagem"]}></img>
                            <span className="rede-tag">{equipe[index]["rede"]["tag"]}</span>
                        </div>
                    </Link>
                    <div className='textos-equipe'>
                        <span className='nome'>
                            {equipe[index]["nome"]}
                        </span>
                        <span className='idade'>
                            {equipe[index]["idade"]}
                        </span>
                        <span className='periodo'>
                            {equipe[index]["periodo"]}
                        </span>
                        <span className='curso'>
                            {equipe[index]["curso"]}
                        </span>
                    </div>
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EmblaCarousel
