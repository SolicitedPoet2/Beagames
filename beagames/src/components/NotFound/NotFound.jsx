import { Link } from "react-router-dom"
import TextField from "@mui/material/TextField";
import './NotFound.css'

function NotFound() {
  return (
    <>
      <main class="notfound-main">
        <div class="notfound">
          <h1>Esta página não encontrada ❌</h1>
          <div class="search">
            <TextField
              id="outlined-basic"
              variant="outlined"
              label="🔍 BUSCAR"
            />
          </div>
          <Link to={"/"}>
            <button>Volte para o homepage</button>
          </Link>
        </div>
      </main>
    </>
  )
}

export default NotFound
