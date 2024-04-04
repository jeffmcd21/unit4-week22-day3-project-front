
import { Link } from "react-router-dom"
const Header = () => {
  return (
    <nav className='nav'>
        <Link to="/">
            <div className='background-image'>
                <h1>The Home of Baseball</h1>
            </div>
        </Link>
    </nav>
  )
}

export default Header
