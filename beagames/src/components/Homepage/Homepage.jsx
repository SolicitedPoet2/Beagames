import './Homepage.css'
import logo from '../../assets/logo.webp';
import menu from '../../assets/menu.svg'
import TextField from "@mui/material/TextField";
function HomePage() {
  return (
    <>
      <div class="container-header">
        <header>
            <nav>
              <img src={menu} alt="Menu" class="menu header-items"/>
              <h1>MENU</h1>
            </nav>

            <img src={logo} alt="Logo" class="logo header-items"/>
            <div class="search">
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
    </>
  )
}

export default HomePage
