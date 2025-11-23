import './Homepage.css'
import logo from '../../assets/logo.webp';
import menu from '../../assets/menu.svg'
import { Link } from "react-router-dom"
import TextField from "@mui/material/TextField";
import EmblaCarousel from './Carousel'
const OPTIONS = { loop: true }
const SLIDE_COUNT = 3
var images = Array(SLIDE_COUNT)
const SLIDES = Array.from(images.keys())

function callMenu() {
    const menu_abrindo = [
      { left: "-350px"},
      { left: "0" } 
    ];
    const container_escurecendo = [
      { filter: "brightness(100%)"},
      { filter: "brightness(50%)" } 
    ];
    const timingOptions = {
      duration: 600,
      easing: 'ease-in-out',
      fill: 'forwards'
    };
  const container = document.getElementById("container");
  const menuDiv = document.getElementById("Menu-div");
  container.animate(container_escurecendo, timingOptions);
  menuDiv.animate(menu_abrindo, timingOptions);
  container.onclick = shooMenu;
  document.body.classList.add('no-scroll');
}

function shooMenu() {
  const menu_fechando = [
    { left: "0"},
    { left: "-350px" } 
  ];
  const container_aparecendo = [
    { filter: "brightness(50%)"},
    { filter: "brightness(100%)" } 
  ];
  const timingOptions = {
    duration: 600,
    easing: 'ease-in-out',
    fill: 'forwards'
  };
  const container = document.getElementById("container");
  const menuDiv = document.getElementById("Menu-div");
  container.style.filter = "brightness(100%)";
  container.animate(container_aparecendo, timingOptions);
  menuDiv.animate(menu_fechando, timingOptions);
  container.onclick = null;
  document.body.classList.remove('no-scroll');
}

function HomePage() {
  return (
    <>
      <div id="Menu-div">
        <h2 id="reportagens">Página inicial</h2>
        <Link to={"/"}>
          <button id="menu-text" onClick={shooMenu}>Voltar para a página inicial</button>
        </Link>
        <h2 id="reportagens">Reportagens</h2>
        <Link to={"/reportagens/o-impacto-dos-jogos-na-vida-das-pessoas"}>
          <button id="menu-text" onClick={shooMenu}>O Impacto dos Jogos na Vida das Pessoas</button>
        </Link>
      </div>
      <div id="container">
        <div className="container-header">
          <header>
              <nav>
                <button id="menu-button" onClick={callMenu}>
                  <img src={menu} alt="Menu" className="menu header-items"/>
                  <h1 class="menu-text">MENU</h1>
                </button>
              </nav>
              <img src={logo} alt="Logo" className="logo header-items"/>
              <div className="search">
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  fullWidth
                  label="🔍 BUSCAR"
                />
              </div>
            </header>
        </div>
        
        <main className='homepage'>
          <span className="titulo-homepage">Seja bem-vindo ao portal de notícias da <span className="mark-text">Beagames</span>!</span>
          <div className='textual-homepage'>
              <div>
                Somos a <span className="mark-text">Beagames</span>, uma pequena equipe de jornalismo que tem a busca de trazer mais sobre os jogos e os impactos dele no nosso mundo.
              </div>
              <EmblaCarousel slides={SLIDES} options={OPTIONS} />
          </div>
          
        </main>
        
        <div className='footer-container'>
          <footer>
          </footer>
        </div>
      </div>
    </>
  )
}

export default HomePage
