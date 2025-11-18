import { Link } from "react-router-dom"
import './NotFound.css'

function NotFound() {
  return (
    <>
      <div>
        <h1>Esta página não existe ❌</h1>
        <Link to={"/"}>
          <button>Volte para o homepage</button>
        </Link>
      </div>
    </>
  )
}

export default NotFound
