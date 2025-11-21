import './Homepage.css'
import logo from '../../assets/logo.webp';
import menu from '../../assets/menu.svg'
import { Link } from "react-router-dom"
import TextField from "@mui/material/TextField";
function callMenu() {
    const menu_abrindo = [
      { left: "-350px"},
      { left: "0" } 
    ];
    const timingOptions = {
      duration: 600,
      easing: 'ease-in-out',
      fill: 'forwards'
    };
  const container = document.getElementById("container");
  const menuDiv = document.getElementById("Menu-div");
  container.style.filter = "brightness(50%)";
  menuDiv.animate(menu_abrindo, timingOptions);
  container.onclick = shooMenu;
}

function shooMenu() {
  const menu_fechando = [
    { left: "0"},
    { left: "-350px" } 
  ];
  const timingOptions = {
    duration: 600,
    easing: 'ease-in-out',
    fill: 'forwards'
  };
  const container = document.getElementById("container");
  const menuDiv = document.getElementById("Menu-div");
  container.style.filter = "brightness(100%)";
  menuDiv.animate(menu_fechando, timingOptions);
  container.onclick = null;
}

function HomePage() {
  return (
    <>
      <div id="Menu-div">
        <h2 id="reportagens">Reportagens</h2>
        <Link to={"/reportagens/o-impacto-dos-jogos-na-vida-das-pessoas"}>
          <button id="menu-text">O Impacto dos Jogos na Vida das Pessoas</button>
        </Link>
      </div>
      <div id="container">
        <div className="container-header">
          <header>
              <nav>
                <button className="menu-button" onClick={callMenu}>
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
        
        <main>
        </main>
      </div>
    </>
  )
}

export default HomePage
