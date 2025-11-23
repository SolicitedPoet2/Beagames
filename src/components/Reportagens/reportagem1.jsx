import { Link } from "react-router-dom"
import TextField from "@mui/material/TextField";
import logo from '../../assets/logo.webp';
import menu from '../../assets/menu.svg'
import './reportagem1.css'

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

function reportagem() {
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
        
        <main className="reportagem">
          <div className="titulo">
            <span>
              O Impacto dos Jogos na Vida das Pessoas
            </span>
            <div className="subtitulo">
              Os jogos estão transformando muitas vidas, de ferramenta de diversão a instrumento educacional e profissional, os games já fazem parte da rotina de milhões de brasileiros.
            </div>
            <div className="publi">
              <span>Por </span> <span className="mark-text">Beagames</span> <span>— Minas Gerais, Belo Horizonte</span>
              <br/>
              <span className="data">23/11/2025 13h08</span>
            </div>
          </div>

          <div className="global">
            <div className="globo-textual">
              <iframe width="680" height="400" src="https://www.youtube.com/embed/0RdjHJd1ytA" title="Abertura" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              <div>
                Os <span className="mark-text">jogos</span> deixaram de ser apenas <span className="mark-text">entretenimento</span>. Hoje, influenciam a educação, o bem-estar e até o mercado de trabalho. Mas qual é o real impacto deles no nosso dia a dia?
              </div>
            </div>

            <div className="linha"></div>
            <span className="titulo-part2">Crescimento e Popularização</span>
            <div className="globo-textual">
              <iframe width="680" height="400" src="https://www.youtube.com/embed/ZhRiNsa6pjo" title="Abertura" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              <div>
                O Brasil é um dos maiores <span className="mark-text">mercados de games do mundo</span> , e jogar já virou <span className="mark-text">hábito</span> entre
                crianças, jovens e adultos. A <span className="mark-text">tecnologia</span> facilitou o acesso e ampliou o alcance desse
                universo.
              </div>
            </div>

            <div className="linha"></div>
            <div className="globo-textual">
              <span className="titulo2-part2">Benefícios Emocionais e Sociais</span>
              <div>
                Além de diversão, os <span className="mark-text">jogos</span> ajudam a aliviar o <span className="mark-text">estresse</span>, estimulam o <span className="mark-text">raciocínio</span> e criam
                conexões entre <span className="mark-text">pessoas</span>. Especialistas afirmam que, quando usados com equilíbrio, podem até melhorar a <span className="mark-text">saúde mental</span>.
              </div>
               <span className="titulo2-part2">Educação e Carreira</span>
              <div>
                Nas escolas, <span className="mark-text">jogos</span> são usados como <span className="mark-text">ferramentas de aprendizagem</span>, como no caso em
                uma faculdade nos Estados Unidos no estado de Tennessee, onde os professores  
                usaram o jogo GTA para retratar a sociedade da época em que o jogo se passa, bem
                como a forma de viver. E no mercado, o <span className="mark-text">e-sport</span> já abriu <span className="mark-text">portas </span>para carreiras como
                jogador profissional, criador de conteúdo e desenvolvedor.
              </div>
            </div>

            <div className="linha"></div>
            <span className="titulo-part2">Entrevistas</span>
            <div className="globo-textual">
              <iframe width="680" height="400" src="https://www.youtube.com/embed/lsV2EqTgCx8" title="Abertura" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>

            <div className="linha"></div>
            <span className="titulo-part2">Cuidados Necessários</span>
            <div className="globo-textual">
              <iframe width="680" height="400" src="https://www.youtube.com/embed/3j4pklVCjL0" title="Abertura" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              <div>
                Apesar dos benefícios, especialistas <span className="mark-text">alertam</span> para o uso <span className="mark-text">excessivo</span>, que pode causar
                problemas de sono, isolamento e queda no rendimento. A prática equilibrada é <span className="mark-text">essencial</span>.
              </div>
            </div>

            
            <div className="linha"></div>
            <div className="globo-textual2">
              <span className="titulo-part2">Conclusão</span>
              <div>
                Os jogos já <span className="mark-text">influenciam</span> nossa forma de aprender, socializar e até trabalhar. O <span className="mark-text">desafio</span> é
                aproveitar tudo isso com <span className="mark-text">consciência </span>e deixar que o universo dos games continue
                transformando <span className="mark-text">vidas</span>.
              </div>
            </div>
            <span className="titulo-part2">Acompanhe aqui o vídeo da reportagem completa 👇</span>
            <iframe width="680" height="400" src="https://drive.google.com/file/d/1ehj1Q3MivfMptCrWnZ1e7ztFCJBZKAuP/preview"></iframe>
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

export default reportagem
